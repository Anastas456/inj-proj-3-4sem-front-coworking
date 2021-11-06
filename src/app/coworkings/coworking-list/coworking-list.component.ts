import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';


@Component({
  selector: 'app-coworking-list',
  templateUrl: './coworking-list.component.html',
  styleUrls: ['./coworking-list.component.css']
})
export class CoworkingListComponent implements OnInit {


  constructor(private sharedService:SharedServiceService) { }

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


}
