import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {

  constructor(private sharedService:SharedServiceService,
    public userService: UserService,
    private router: Router) { }

  officeList: any=[];
  rateList: any[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.sharedService.getOfficeList().subscribe(
      data => {
        this.officeList=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    
    this.sharedService.getRateList().subscribe(
      data => {
        this.rateList=data;
      },
      error => {
        console.log(error)
      }
    );
  }

  getCount(){
    return this.officeList.length;
  }

  onEditPremise(id:number){
    this.router.navigate([this.router.url, 'office-edit', id]);
  }

  onAddPremise(){
    this.router.navigate([this.router.url, 'office-edit']);
  }

}
