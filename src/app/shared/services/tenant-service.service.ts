import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseTenantUrl ='http://127.0.0.1:8000/api/tenants';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  constructor(private http: HttpClient) { }

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
  
  // findByType(tenant_type): Observable<any> {
  //   return this.http.get(`${baseTenantUrl}?tenant_type=${tenant_type}`);
  // }


}
