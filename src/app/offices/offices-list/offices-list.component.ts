import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {

  constructor(private sharedService:SharedServiceService) { }

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

}
