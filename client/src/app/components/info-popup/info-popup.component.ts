import { Component, OnInit } from '@angular/core';
import { InfoPopupService } from '../../services/info-popup.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.styl'],
  animations: [
    trigger('popupState', [
      state('show', style({
        opacity: 1,
        zIndex: 95
      })),
      state('hide',   style({
        opacity: 0,
        zIndex: -1
      })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
})
export class InfoPopupComponent implements OnInit {

  constructor(
    private infoPopupService: InfoPopupService
  ) { }

  public isActive: boolean = false;
  public content: string;

  ngOnInit() {
    this.infoPopupService.isActive.subscribe(is => this.isActive = is);
    this.infoPopupService.infoContent.subscribe(info => this.content = info);
  }

  get stateName() {
    return this.isActive ? 'show' : 'hide'
  }

}
