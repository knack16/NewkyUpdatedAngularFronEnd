import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor() {}

  ngOnInit(): void{

  }

  loginForm = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@cognizant\.com")]),
    pass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
   })
  
   loginSubmitted(){
    
      console.log("Submitted");
      
    }
    
    get Email() : FormControl {
      return this.loginForm.get("email") as FormControl;
     }
  
     get Pass() : FormControl {
      return this.loginForm.get("pass") as FormControl;
     }

}
