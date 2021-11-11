import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/shared/models/tenant.model';
import { TenantServiceService } from 'src/app/shared/services/tenant-service.service';


@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.css']
})
export class TenantEditComponent implements OnInit {
  tenant:Tenant
  id:number;
  tenantForm:FormGroup;
  
  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  message: '';

  constructor(private activetedRoute: ActivatedRoute,
    private tenantService:TenantServiceService,
    private router:Router) { 
      this.activetedRoute.params.subscribe(params =>{
        if (params.id !==null && params.id!==undefined){
        this.id=+params.id;
      }
      else{
        this.id=null;
      }
    })
  }

  ngOnInit(): void {
    this.tenantForm= new FormGroup({
      tenant_name:new FormControl(null, [Validators.required]),
      tenant_type:new FormControl('физическое лицо', [Validators.required]),
      phone:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required])
    });
    this.getData();
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
    try{
      let tenant=this.tenantService.getTenant(this.id);
      this.tenant= await tenant;
    }
    catch(err){
      console.error(err);
    }
    this.tenantForm.patchValue({
      tenant_name: this.tenant.tenant_name,
      tenant_type: this.tenant.tenant_type,
      phone: this.tenant.phone,
      email: this.tenant.email
    })
  }
}

onSave(): void {
  if (this.id !== null && this.id !==undefined){
    this.tenantService.updateTenant(this.id, this.tenantForm.value)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
          alert('Изменения сохранены');
        },
        error => {
          console.log(error);
        });
  }
  else{
    this.tenantService.createTenant(this.tenantForm.value)
      .subscribe(
        response => {
          console.log(response);
          alert('Новый арендатор создан');
        },
        error => {
          console.log(error);
        });
  }
  
}

onDelete(){
  this.tenantService.deleteTenant(this.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/tenants']);
      },
      error => {
        console.log(error);
      });
  }

}
