import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared/services/shared-service.service';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  rent; 
  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
    this.rent={
      client_name:'',
      email:'',
      phone:'',
      description:'',
    }
  }

  sendRentForm(){
    this.sharedService.postRentForm(this.rent).subscribe(
      response => {
        console.log(response);
        alert('Ваша форма успешно отправлена');
      },
      error => {
        console.log(error)
      }
    )
  }

}
