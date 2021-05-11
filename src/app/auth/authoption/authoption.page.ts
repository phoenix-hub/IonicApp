import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoption',
  templateUrl: './authoption.page.html',
  styleUrls: ['./authoption.page.scss'],
})
export class AuthoptionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSignUp() {
    this.router.navigate(['/signup']);
    //this.router.navigateByUrl('/signup');
  }
  gotoSignIn() {
    this.router.navigate(['/signin']);
  }
}
