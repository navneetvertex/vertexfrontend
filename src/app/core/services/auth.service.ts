import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environments';
import { RegisterForm, User } from '../models/User';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user: User;
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {
        this.isBrowser = isPlatformBrowser(this.platformId);

        let user = null;
        if (this.isBrowser) {
            const stored = localStorage.getItem('currentUser');
            user = stored ? JSON.parse(stored) : null;
        }
        this.currentUserSubject = new BehaviorSubject<any>(user);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.api_url}auth/user_login`, { username, password }, { withCredentials: true })
            .pipe(map(user => {
                if (user && user.accessToken && this.isBrowser) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', user.accessToken);
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    register(user: RegisterForm) {
        return this.http.post<any>(`${environment.api_url}auth/user_register`, user, { withCredentials: true })
            .pipe(map(user => {
                if (user && user.accessToken && this.isBrowser) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('token', user.accessToken);
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }   

    updateAccessToken(newToken: string) {
        const user = this.currentUserValue!;
        user.accessToken = newToken;
        if (this.isBrowser) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', newToken);
        }
        this.currentUserSubject.next(user);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.api_url}auth/refresh-token`, {}, { withCredentials: true });
    }

    logout() {
        if (this.isBrowser) {
            localStorage.clear()
            localStorage.removeItem('currentUser');
        }
        this.currentUserSubject.next(null);
    }

}
