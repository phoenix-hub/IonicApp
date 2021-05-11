import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiPath = 'https://api.kalchakra.online';
  constructor(private http: HttpClient) { }

  
  GetAll(): Observable<any[]> { 
    return this.http.get<any>(this.apiPath+'/api/users');
  }
  GetById(email: any, pw: any): Observable<any> {
    return this.http.get<any>(this.apiPath + '/api/users' + email+'&pw='+pw);
  }
  Delete(id: any): Observable<any[]> {
    return this.http.delete<any>(this.apiPath + '/api/users/?email=' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  Post(data: any): Observable<any[]> { 
    return this.http.post<any>(this.apiPath + '/api/users', JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  Put(email: any, data: any): Observable<any[]> {
    return this.http.put<any>(this.apiPath + '/api/users/?email=' + email, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
