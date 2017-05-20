import { Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 employees=[];
  constructor(private _employee:AppService){}
  ngOnInit()
  {
    this._employee.getEmployee().subscribe(resData=>this.employees=resData)
  }
}
