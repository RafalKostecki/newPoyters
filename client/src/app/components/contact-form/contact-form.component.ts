import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import formsConfig from '../../../assets/configs/formsConfig.json';
import apiConfig from '../../../assets/configs/apiConfig.json';
import { corsHeaders } from '../../scripts/auth/connectOptions';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public contactForm: FormGroup;
  public formConfig = formsConfig.contact;
  public submitted = false;
  public mailStatus: string;
  private sentMailInfo = {
    ok: 'Your mail has been sent!',
    error: 'Cannot sent mail. Pleas try later'
  }


  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.name.min)
      ]],
      topic: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.topic.min),
        Validators.maxLength(this.formConfig.topic.max)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      content: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.content.min),
        Validators.maxLength(this.formConfig.content.max)
      ]]
    });
  }

  get formControls() { 
    return this.contactForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    const mail = {
      from: `"${this.contactForm.value.email}" <no-reply@poyters.pl>`,
      to: 'business@poyters.pl',
      subject: this.contactForm.value.topic,
      text: `Message from: ${this.contactForm.value.name}, ${this.contactForm.value.email}; ${this.contactForm.value.content}`
    }

    fetch(`${apiConfig.poytersApiUrl}/mail/send`,
      {
        method: 'POST',
        headers: corsHeaders,
        credentials: 'include',
        body: JSON.stringify(mail)
      })
      .then((res) => {
        if (res.status === 200) {
          this.mailStatus = this.sentMailInfo.ok;
        } else {
          this.mailStatus = this.sentMailInfo.error;
        }
      })
      .catch(() => {
        this.mailStatus = this.sentMailInfo.error;
      })
  }

}
