import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient) { }

getUserById() {
    return this.http.get(`${environment.api_url}frontend/users/me`);
}

upsertKyc(kycData: any) {
    return this.http.post(`${environment.api_url}frontend/users/kyc`, kycData);
}


}
