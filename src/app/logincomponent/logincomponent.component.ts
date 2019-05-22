import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent {

  passwordCheck: any;

  get loginInfo() {
    return {
      Phone: this.loginForm.get('Phone'),
      Password: this.loginForm.get('Password'),
    };
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private httpClient: HttpClient) {
     this.passwordCheck = this.loginService.passwordCheck;
  }

  loginForm = this.fb.group({
    Phone: ['', Validators.required],
    Password: ['', Validators.required]
  });

  login(formValue) {
    console.log(formValue.value);
    this.loginService.login(formValue.value);
  }

}
