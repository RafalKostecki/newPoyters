import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits-footer',
  templateUrl: './credits-footer.component.html',
  styleUrls: ['./credits-footer.component.styl']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public currentYear: number = new Date().getFullYear();

  ngOnInit() { }
  
}
