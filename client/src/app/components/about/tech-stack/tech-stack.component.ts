import { Component, OnInit } from '@angular/core';
import aboutCompany from '../../../assets/data/aboutCompany.json'; 

@Component({
  selector: 'tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.styl']
})
export class TechStackComponent implements OnInit {

  public technologiesFrontend = aboutCompany.stack.frontend;
  public technologiesBackend = aboutCompany.stack.backend;
  public technologiesOther = aboutCompany.stack.other;

  constructor() { }

  ngOnInit(): void {
  }

}
