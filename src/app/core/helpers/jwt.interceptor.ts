import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { throwError, BehaviorSubject, of } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

let isRefreshing = false;
const refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export const jwtInterceptorFn: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);

  request = request.clone({ withCredentials: true });
  
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('Error Status', error.status);
      if (error.status === 401 && !request.url.includes('/auth/refresh-token')) {
        return handle401Error(request, next, authService);
      }

      if (error.status === 403) {
        toastr.error('You do not have permission to access this resource.', 'Access Denied');
      } else if (error.status === 404) {
        toastr.error('The requested resource was not found.', 'Not Found');
      } else if (error.status >= 500) {
        toastr.error('An unexpected error occurred. Please try again later.', 'Server Error');
      } else if (error.status != 401){
        toastr.error(error.message || 'An error occurred', 'Error');
      }

      return throwError(() => error);
    })
  );
};

function addToken(request: HttpRequest<any>, token: string) {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  });
}

function handle401Error(
  request: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService
) {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return authService.refreshToken().pipe(
      switchMap((tokenData: any) => {
        const newToken = tokenData?.accessToken;

        if (!newToken) {
          authService.logout();
          return throwError(() => new Error('No token returned'));
        }

        console.log('[Interceptor] Token refreshed');
        authService.updateAccessToken(newToken);
        refreshTokenSubject.next(newToken);
        isRefreshing = false;

        return next(addToken(request, newToken));
      }),
      catchError((err) => {
        isRefreshing = false;
        authService.logout();
        return throwError(() => err);
      })
    );
  } else {
    return refreshTokenSubject.pipe(
      filter(token => token != null),
      take(1),
      switchMap(token => next(addToken(request, token!)))
    );
  }
}