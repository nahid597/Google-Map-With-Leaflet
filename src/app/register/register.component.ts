import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

interface FeaturedPhotosUrls {
  url1?: string;
  url2?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  check: any = true;

  get username() {
    return {
      Name: this.registrationForm.get('Name'),
      Phone: this.registrationForm.get('Phone'),
      Password: this.registrationForm.get('Password'),
      confirmPassword: this.registrationForm.get('confirmPassword')
    };
  }

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  registrationForm = this.fb.group({
    Name: ['', Validators.required],
    Password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    Phone: ['', Validators.required]
  });

  save(formData) {
    console.log(formData.value.Password);
    console.log(this.registrationForm.get('Name').value);
    if (formData.valid && formData.value.Password === formData.value.confirmPassword) {
      this.loginService.save(formData);
    } else {
      console.log('form is not valid');
    }
  }

  // logout() {
  //   this.loginService.logout();
  // }

  selectOption() {
    this.check = true;
    console.log('check is: ' + this.check);
  }

  selectAnotherOption() {
    this.check = false;
    console.log('check is: ' + this.check);
  }
}
