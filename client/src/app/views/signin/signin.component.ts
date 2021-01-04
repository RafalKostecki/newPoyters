import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { corsHeaders } from '../../scripts/auth/connectOptions';
import apiConfig from '../../assets/configs/apiConfig.json';
import { InfoPopupService } from '../../services/info-popup.service';
import infoConfig from '../../assets/configs/infoConfig.json';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {

  private categoryName = "Sign in";
  signInForm: FormGroup;
  submitted = false;
  signupMessage: string;

  constructor(
    private formBuilder: FormBuilder, 
    private uiService: UiService,
    private userService: UserService,
    private router: Router,
    private infoPopupService: InfoPopupService
  ) { }

  ngOnInit() {
    this.uiService.changeCategory(this.categoryName);

    this.signInForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { 
    return this.signInForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.signInForm.invalid) return;

    const data = {
      username: this.signInForm.value.login,
      password: this.signInForm.value.password
    }

    fetch(`${apiConfig.poytersApiUrl}/auth/login`,
      {
        method: 'POST',
        headers: corsHeaders,
        credentials: 'include',
        body: JSON.stringify(data)
      })
    .then(() => {
      fetch(`${apiConfig.poytersApiUrl}/users/profile/`,
        {
          method: 'GET',
          headers: corsHeaders,
          credentials: 'include'
        })
      .then((res) => res.json())
      .then((resJSON) => {
        if (resJSON.statusCode === 401) {
          this.signupMessage = "Wrong username or password";
        } else if (resJSON._id) {    
          this.userService.setUserData(resJSON);
          this.infoPopupService.setIsActive(true);
          this.infoPopupService.setInfoContent(infoConfig.messages.signin);
          this.router.navigate(['']);
        }
      })
      .catch(() => {
        this.signupMessage = "Something went wrong :c";
      });
    })
    .catch(() => {
      this.signupMessage = "Something went wrong :c";
    })
  }
}
