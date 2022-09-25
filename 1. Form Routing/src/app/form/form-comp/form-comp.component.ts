import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public firstName = "";
  public lastName = "";
  public dateOfBirth ="";
  public age = "";
  submitHandler(){
    console.log(`
    First Name : ${this.firstName},
    Last Name : ${this.lastName},
    D.O.B : ${this.dateOfBirth},
    Age : ${this.age}`)
  }


}
