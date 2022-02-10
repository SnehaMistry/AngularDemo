import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // public cities: Array<Object> = [
  //   {name: 'Los Angeles', population: 3792621},
  //   {name: 'New York', population: 8175133},
  //   {name: 'Chicago', population: 2695598},
  //   {name: 'Houston', population: 2099451},
  //   {name: 'Philadelphia', population: 1526006}
  // ];

  userName = '';
  constructor() { }

  ngOnInit(): void {
   
  }

  onSubmit(formref:NgForm)
  {
    console.log(formref);
  }
 
}
