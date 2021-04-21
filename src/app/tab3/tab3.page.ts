import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myval: any;
  constructor(private http: HttpClient) { }
  get() {
    //return this.http.get<any>('https://api.kalchakra.online/api/ionic').subscribe(x => {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x => {
      this.myval = JSON.stringify(x);
      console.warn(x);
    });
  }

  ngOnInit(): void {
    this.get();
  }
}
