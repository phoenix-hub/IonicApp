import { Component } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { ApiservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  stuList: any = [];
  constructor(private formBuilder: FormBuilder, private service: ApiservicesService) { }

  get name() {
    return this.RegistrationForm.get('name');
  }
  get email() {
    return this.RegistrationForm.get('email');
  }
  get phone() {
    return this.RegistrationForm.get('phone');
  }
  get password() {
    return this.RegistrationForm.get('password');
  }
  get street() {
    return this.RegistrationForm.get('street');
  }
  get city() {
    return this.RegistrationForm.get('city');
  }
  get state() {
    return this.RegistrationForm.get('state');
  }
  get zip() {
    return this.RegistrationForm.get('zip');
  }

  public errorMessage = {
    name: [
      { type: 'required', message: 'Name is Required.' }],

    email: [
      { type: 'required', message: 'EMail is Required.' }
    ],
    phone: [
      { type: 'required', message: 'Phone is Required.' }
    ],
    password: [
      { type: 'required', message: 'password is Required.' }
    ]
    ,

    street: [
      { type: 'required', message: 'street is Required.' }
    ],
    city: [
      { type: 'required', message: 'city is Required.' },
      { type: 'maxlength', message: 'city can be only 100 charactor.' }
    ],
    state: [
      { type: 'required', message: 'state is Required.' }
    ],
    zip: [
      { type: 'required', message: 'zip is Required.' }
    ]
  }

  RegistrationForm: any;
  initialForm() {
    this.RegistrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],

      //address: this.formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]]
      //})

    });
  }

  ngOnInit(): void {
    this.initialForm();
    this.BindList();
    console.log(this.stuList);
  }
  BindList() {
    this.service.GetAll().subscribe(x => {
      this.stuList = x;
      console.warn(x);
    })
  }
  submit() {
    console.log(this.RegistrationForm.value);
    this.service.Post(this.RegistrationForm.value).subscribe(x => {
      alert('Saved.');
      this.initialForm();
    })
  }
}
