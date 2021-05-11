import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  apiPath = 'https://api.kalchakra.online';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<any[]> {
    // console.log(this.http.get<any>('https://api.kalchakra.online/api/ionic').subscribe(x => {
    //   console.log(x); 
    // }));
    return this.http.get<any>('https://api.kalchakra.online/api/ionic');
  }
  GetById(id: any): Observable<any> {
    return this.http.get<any>(this.apiPath + '/api/ionic' + id);
  }
  Delete(id: any): Observable<any[]> {
    return this.http.delete<any>(this.apiPath + '/api/ionic/?id=' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  Post(data: any): Observable<any[]> {
    // console.log(JSON.stringify(data));
    // console.log('API Path: '+this.apiPath + '/api/ionic');
    return this.http.post<any>(this.apiPath + '/api/ionic', JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  Put(id: any, data: any): Observable<any[]> {
    return this.http.put<any>(this.apiPath + '/api/ionic/?id=' + id, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
