import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  baseUrl= 'http://127.0.0.1:8000/api';

  constructor(public http:HttpClient, public path: string) { }

  getPremisesList():Observable<any>{
    return this.http.get<any>(this.baseUrl + '/premises/')
  }


  getRateList():Observable<any>{
    return this.http.get<any>(this.baseUrl + '/rates/')
  }
}
