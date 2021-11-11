import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantServiceService } from './tenant-service.service';

const basePremiseUrl= 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class PremiseServiceService extends TenantServiceService {

  constructor(public http:HttpClient) {
    super(http)
  }

  getPremiseO(id): Observable<any> {
    return this.http.get(`${basePremiseUrl}/premises/${id}`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }

  getPremise(id:number): Promise<any>{
    return this.getPremiseO(id).toPromise();
  }

  createPremise(data: any): Observable<any> {
    return this.http.post(`${basePremiseUrl}/add-premise`, data, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }

  updatePremise(id: any, data: any): Observable<any> {
    return this.http.put(`${basePremiseUrl}/premises/${id}`, data, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })}
    );
  }

  deletePremise(id: any): Observable<any> {
    return this.http.delete(`${basePremiseUrl}/premises/${id}`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }


}
