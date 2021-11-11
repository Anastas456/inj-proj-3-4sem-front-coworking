import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-coworking-list',
  templateUrl: './coworking-list.component.html',
  styleUrls: ['./coworking-list.component.css']
})
export class CoworkingListComponent implements OnInit {


  constructor(private sharedService:SharedServiceService,
    public userService: UserService,
    private router: Router) { }

  coworkingList: any=[];
  rateList:any=[]

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.sharedService.getCoworkingList().subscribe(
      data => {
        this.coworkingList=data;
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
    return this.coworkingList.length;
  }

  onEditPremise(id:number){
    this.router.navigate([this.router.url, 'coworking-edit', id]);
  }

  onAddPremise(){
    this.router.navigate([this.router.url, 'coworking-edit']);
  }


}
