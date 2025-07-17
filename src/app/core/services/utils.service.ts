import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

constructor(private http: HttpClient) { }

validate_pincode(pincode: string) {
  return this.http.get(`${environment.api_url}utils/validate_pincode/${pincode}`);
}


}
