import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantServiceService } from './tenant-service.service';

const baseUrl= 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService extends TenantServiceService {

  constructor(public http:HttpClient)  { 
    super(http)
  }

  getCoworkingList():Observable<any>{
    return this.http.get(`${baseUrl}/premises?premise_type=1`);
  }

  getDiscussionList():Observable<any>{
    return this.http.get(`${baseUrl}/premises?premise_type=2`)
  }

  getOfficeList():Observable<any>{
    return this.http.get(`${baseUrl}/premises?premise_type=3`)
  }

  getRateList():Observable<any>{
    return this.http.get<any>(`${baseUrl}/rates/`)
  }
}
