import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   repeatPass : string ='none';
   constructor() {}

   ngOnInit(): void{

   }

   registerForm = new FormGroup({
    fullName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[A-Z][a-z]+ [A-Z][a-z]+")]),
    email:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@cognizant\.com")]),
    pass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    confirmpass: new FormControl("")
   })

   registerSubmitted(){
    if(this.Pass.value == this.ConfirmPass.value){
      console.log("Submitted");
      console.log(this.registerForm);
      this.repeatPass = 'none';
    }
    else{
      this.repeatPass = 'inline';
    }
    
   }

   get FullName() : FormControl {
    return this.registerForm.get("fullName") as FormControl;
   }

   get Email() : FormControl {
    return this.registerForm.get("email") as FormControl;
   }

   get Pass() : FormControl {
    return this.registerForm.get("pass") as FormControl;
   }

   get ConfirmPass() : FormControl {
    return this.registerForm.get("confirmpass") as FormControl;
   }
}


