import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from '../../scripts/mustMatch.validadator';
import { corsHeaders } from '../../scripts/auth/connectOptions';
import formsConfig from '../../assets/configs/formsConfig.json';
import apiConfig from '../../assets/configs/apiConfig.json';
import { Router } from '@angular/router';
import { InfoPopupService } from '../../services/info-popup.service';
import infoConfig from '../../assets/configs/infoConfig.json';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {

  private categoryName = "Sign up";
  public registerForm: FormGroup;
  public submitted = false;
  public signupMessage: string;
  public signupConfig = formsConfig.signup;

  constructor(
    private formBuilder: FormBuilder,
    private data: UiService,
    private router: Router,
    private infoPopupService: InfoPopupService
  ) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName);

    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(this.signupConfig.password.min),
        Validators.maxLength(this.signupConfig.password.max)
      ]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: mustMatch('password', 'confirmPassword')
    });
  }

  get formControls() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    const data = {
      username: this.registerForm.value.login,
      password: this.registerForm.value.password,
      mail: this.registerForm.value.email,
    };

    fetch(`${apiConfig.poytersApiUrl}/users/create`,
      {
        method: 'POST',
        headers: corsHeaders,
        body: JSON.stringify(data)
      }
    )
    .then((response) => response.json())
    .then((responseJSON) =>  {
      if (responseJSON.status === 409) {
        this.signupMessage = "User already exists!";
      } else {
        this.submitted = false;
        this.registerForm.reset();
        this.infoPopupService.setIsActive(true);
        this.infoPopupService.setInfoContent(infoConfig.messages.signup);
        this.router.navigate(['/signin']);
      }
    })
    .catch(() => {
      this.signupMessage = "Something went wrong :c";
    })
  }

}
