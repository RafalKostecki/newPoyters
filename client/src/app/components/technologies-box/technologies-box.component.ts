import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technologies-box',
  templateUrl: './technologies-box.component.html',
  styleUrls: ['./technologies-box.component.styl']
})
export class TechnologiesBoxComponent implements OnInit {

  @Input() technologies;

  constructor() { }

  ngOnInit(): void {
  }

}
