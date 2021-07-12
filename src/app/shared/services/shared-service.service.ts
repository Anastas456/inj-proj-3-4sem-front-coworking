import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  readonly baseUrl= 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  getPremisesList():Observable<any>{
    return this.http.get<any>(this.baseUrl + '/premises/')
  }

  // getCoworkingPremiseList():Observable<any>{
  //   return this.http.get<any>(this.baseUrl + '/premises/1/')
  // }

  getRateList():Observable<any>{
    return this.http.get<any>(this.baseUrl + '/rates/')
  }
}
