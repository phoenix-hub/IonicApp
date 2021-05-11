import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  stuList: any = []; 
  myvalA: any;
  myvalB: any;
  xyz: any;
  constructor(private service: ApiservicesService, private http: HttpClient) {}

  ngOnInit(): void { 
    this.BindList(); 
  }
  BindList() {
    this.service.GetAll().subscribe(x => {
      this.stuList = x; 
      console.warn(x);
    })
   }
}
