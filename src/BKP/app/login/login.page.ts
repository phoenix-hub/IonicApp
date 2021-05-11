import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { TabsPageRoutingModule } from './../tabs/tabs-routing.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }
  login(){ 
    console.warn(this.router.navigateByUrl('tabs')); 
  }
}
