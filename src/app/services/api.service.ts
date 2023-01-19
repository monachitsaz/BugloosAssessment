import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8','reportProgress':'true','observe':'events'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }


  getList(
    url: string
  ): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/${url}`
    );
  }

  getById(id,url:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}/${id}`);
  }

  

  create(data,url:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, data,{responseType: 'text'});
  }

  createWithFile(data,url:string,headers:HttpHeaders): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, data ,{headers}
  
    );
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl+'/Login', { username, password }, httpOptions)
  }

}
