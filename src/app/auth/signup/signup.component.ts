import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../app.reducer';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.GlobalState>,
    private authService: AuthService,
  
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('jackoboes@gmail.com', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('123456', { 
        validators: [Validators.required] })
    });
  }
  onSubmitSignupForm() {
    this.authService.signUp(this.signupForm.value)
  }
}
