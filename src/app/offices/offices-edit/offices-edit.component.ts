import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Premise } from 'src/app/shared/models/premise.model';
import { PremiseServiceService } from 'src/app/shared/services/premise-service.service';

@Component({
  selector: 'app-offices-edit',
  templateUrl: './offices-edit.component.html',
  styleUrls: ['./offices-edit.component.css']
})
export class OfficesEditComponent implements OnInit {

  premise:Premise;
  id:number;
  premiseForm: FormGroup;
  message:'';

  constructor(private activetedRoute: ActivatedRoute,
    private premiseService:PremiseServiceService,
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
    this.premiseForm= new FormGroup({
      address:new FormControl(null, [Validators.required]),
      square:new FormControl(null, [Validators.required]),
      number_of_workplaces:new FormControl(null, [Validators.required]),
      premise_type: new FormControl(1, [Validators.required])
    });
    this.getData();
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
      try{
        let premise=this.premiseService.getPremise(this.id);
        this.premise= await premise;
      }
      catch(err){
        console.error(err);
      }
      this.premiseForm.patchValue({
        address: this.premise.address,
        square: this.premise.square,
        number_of_workplaces: this.premise.square,
        premise_type: this.premise.premise_type
      })
    }
  }

  onSave(): void{
    if (this.id !== null && this.id !==undefined){
      this.premiseService.updatePremise(this.id, this.premiseForm.value)
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
      this.premiseService.createPremise(this.premiseForm.value)
        .subscribe(
          response => {
            console.log(response);
            alert('Новое помещение добавлено');
          },
          error => {
            console.log(error);
          });
    }
  }

  onDelete(){
    this.premiseService.deletePremise(this.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/offices']);
      },
      error => {
        console.log(error);
      });
  }

}
