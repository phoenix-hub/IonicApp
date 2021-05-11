import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from './Person';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  person: Person;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(person: Person) {
    console.log(`Email id : ${person.email}, Password : ${person.pw} `);
    this.router.navigate(['/tabs']); 
  }
}
