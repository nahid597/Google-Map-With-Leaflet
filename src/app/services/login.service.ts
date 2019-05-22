import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// import { WindowService } from '../WindowService';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  ob: any;
  passwordCheck = true;

  constructor(private route: Router, private httpClint: HttpClient) {
    // this.passwordCheck$ = true;
  }

  save(formData) {
    console.log(formData.value);
    this.httpClint.post('http://192.168.0.119:4444/admin/workers', formData.value)
    .subscribe(data => {
      console.log('posted: ', data);
    });
    this.httpClint.get('http://192.168.0.119:4444/admin/workers')
    .subscribe(data => {
      console.log('getting: ', data);
    });
  }
  login(formValue) {
    this.httpClint.get('http://192.168.0.119:4444/admin/workers?Phone=' + formValue.Phone)
    .subscribe(data => {
      this.passwordCheck = (data[0]) ? ((data[0].Password === formValue.Password) ? true : false) : false;
    });
  }
}
