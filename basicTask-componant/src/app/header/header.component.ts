import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  amount: number = 100;
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
