import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-discussions-list',
  templateUrl: './discussions-list.component.html',
  styleUrls: ['./discussions-list.component.css']
})
export class DiscussionsListComponent implements OnInit {

  constructor(private sharedService:SharedServiceService,
    public userService: UserService,
    private router: Router) { }

  discussionList: any=[];
  rateList: any[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.sharedService.getDiscussionList().subscribe(
      data => {
        this.discussionList=data;
      },
      error => {
        console.log(error)
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
    return this.discussionList.length;
  }

  onEditPremise(id:number){
    this.router.navigate([this.router.url, 'discussion-edit', id]);
  }

  onAddPremise(){
    this.router.navigate([this.router.url, 'discussion-edit']);
  }

}
