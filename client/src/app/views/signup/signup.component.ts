import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../scripts/must-match.validadator';
import { corsHeaders } from '../../scripts/auth/connectOptions';
import formsConfig from '../../assets/configs/formsConfig.json';
import apiConfig from '../../assets/configs/apiConfig.json';


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

  constructor(private formBuilder: FormBuilder, private data: UiService) { }

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
        validator: MustMatch('password', 'confirmPassword')
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
        this.signupMessage = "Account sucessfully created. Now, you can sign in";

        this.submitted = false;
        this.registerForm.reset();
      }
    })
    .catch(() => {
      this.signupMessage = "Something went wrong :c";
    })
  }

}
