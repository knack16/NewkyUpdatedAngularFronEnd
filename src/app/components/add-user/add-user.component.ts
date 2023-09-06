import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUser:FormGroup;

  constructor(private fb: FormBuilder) {
    this.addUser= this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@cognizant\.com$/)]],
      role: ['HR', Validators.required],
      currentGradeId: [1, Validators.required]
    });
  }

  onSubmit() {
    if (this.addUser.valid) {
      // Handle form submission
      console.log(this.addUser.value);
    }
  }
}
