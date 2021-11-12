import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onCoworking(){
    this.router.navigate([this.router.url, 'coworkings']);
  }

  onDiscussion(){
    this.router.navigate([this.router.url, 'discussions']);
  }

  onOffice(){
    this.router.navigate([this.router.url, 'offices']);
  }

}
