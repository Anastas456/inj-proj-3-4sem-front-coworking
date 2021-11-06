import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseTenantUrl ='http://127.0.0.1:8000/api/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  constructor(public http: HttpClient) { }

  getAllTenants(): Observable<any> {
    return this.http.get(`${baseTenantUrl}/`);
  }
    
  // getTenant(id): Observable<any> {
  //   return this.http.get(`${baseTenantUrl}/${id}`);
  // }

  getTenant(id:number): Promise<any>{
    return this.http.get(`${baseTenantUrl}/${id}`).toPromise();
  }
  
  createTenant(data: any): Observable<any> {
    return this.http.post(baseTenantUrl, data);
  }

  updateTenant(id: any, data: any): Observable<any> {
    return this.http.put(`${baseTenantUrl}/${id}`, data);
  }

  deleteTenant(id: any): Observable<any> {
    return this.http.delete(`${baseTenantUrl}/${id}`);
  }
  
  findByName(tenant_name): Observable<any> {
    return this.http.get(`${baseTenantUrl}?tenant_name=${tenant_name}`);
  }


}
