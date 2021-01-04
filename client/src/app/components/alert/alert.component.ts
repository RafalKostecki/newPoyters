import { Component, Input } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.styl'],
  animations: [
    trigger('close', [

      state('close', style({
        opacity: '0',
        display:'none'
      })),

      transition('open => close', animate('350ms', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0.5, offset: 0.5}),
        style({opacity: 0, offset: 0.7}),
        style({opacity: 0, display: 'none', offset: 1}),
      ])))
    ])
  ]
})

export class AlertComponent {
  constructor() { }

  @Input() message: string;
  @Input() alertType: string;

  public state: string = 'open';

  hideAlert() {
    this.state = 'close';
  }

}
