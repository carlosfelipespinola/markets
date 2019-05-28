import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'markets-auth-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output('loginSuccess')
  public onLoginSuccess = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public loginFormSubmitted(){
    console.log("Form submitted");
    this.onLoginSuccess.emit(true);
  }
}
