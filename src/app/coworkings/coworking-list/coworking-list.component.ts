import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';


@Component({
  selector: 'app-coworking-list',
  templateUrl: './coworking-list.component.html',
  styleUrls: ['./coworking-list.component.css']
})
export class CoworkingListComponent implements OnInit {

  constructor(private service:SharedServiceService) { }

  premiseList: any=[];
  rateList: any[];

  ngOnInit(): void {
    this.refreshList();
    // console.log(this.baseList);
  }

  refreshList(){
    this.service.getPremisesList().subscribe(data => {
      this.premiseList=data;
    });
    // this.baseList.filter((premise) => premise.premise_type === 1);
    // this.getByType(1);
    this.service.getRateList().subscribe(data => {
      this.rateList=data;
    });
  }

  // getByType(type: number) {
  //   return this.baseList.filter((premise) => premise.premise_type === type);
  // }

  

}
