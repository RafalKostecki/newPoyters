import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'get-button',
  templateUrl: './get-button.component.html',
  styleUrls: ['./get-button.component.styl']
})
export class GetButtonComponent implements OnInit {

  @Input() address: string;
  @Input() buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
