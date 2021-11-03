import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { TenantServiceService } from 'src/app/shared/services/tenant-service.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  tenants?:Tenant[];
  tenant_type='';

  constructor(private tenantService:TenantServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveTenants();
  }


  retrieveTenants(): void {
    this.tenantService.getAllTenants()
      .subscribe(
        data => {
          this.tenants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onAddTenant(){
    this.router.navigate([this.router.url, 'tenantprofile']);
  }

  onEditTenant(id:number){
    this.router.navigate([this.router.url, 'tenantprofile', id]);
  }

  onTenantDelete(id:number): void {
    this.tenantService.deleteTenant(id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTenants();
        },
        error => {
          console.log(error);
        });
  }

  // searchByType(): void {
  //   this.tenantService.findByType(this.tenant_type)
  //     .subscribe(
  //       data => {
  //         this.tenants = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //   // console.log(this.tenant_type); 
  // }
  
  

}
