import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {

  constructor(private service:SharedServiceService) { }

  premiseList: any=[];
  rateList: any[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getPremisesList().subscribe(data => {
      this.premiseList=data;
    });
    this.service.getRateList().subscribe(data => {
      this.rateList=data;
    });
  }

}
