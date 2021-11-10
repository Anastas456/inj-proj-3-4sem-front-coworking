import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseTenantUrl ='http://127.0.0.1:8000/api/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  constructor(public http: HttpClient) { }

  getAllTenants(): Observable<any> {
    return this.http.get(`${baseTenantUrl}/`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }
    
  getTenantO(id): Observable<any> {
    return this.http.get(`${baseTenantUrl}/${id}`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }

  getTenant(id:number): Promise<any>{
    return this.getTenantO(id).toPromise();
  }
  
  createTenant(data: any): Observable<any> {
    return this.http.post(baseTenantUrl, data, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }

  updateTenant(id: any, data: any): Observable<any> {
    return this.http.put(`${baseTenantUrl}/${id}`, data, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })}
    );
  }

  deleteTenant(id: any): Observable<any> {
    return this.http.delete(`${baseTenantUrl}/${id}`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }
  
  findByName(tenant_name): Observable<any> {
    return this.http.get(`${baseTenantUrl}?tenant_name=${tenant_name}`, {headers: new HttpHeaders({
      'Authorization': 'JWT '+ localStorage.getItem('token')
    })});
  }


}
