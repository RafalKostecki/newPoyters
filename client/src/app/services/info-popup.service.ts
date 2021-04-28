import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import infoMessageConfig from '../assets/configs/infoMessage.config.json';

@Injectable({
  providedIn: 'root'
})
export class InfoPopupService {

  public infoContent = new BehaviorSubject<string>("Unknown");
  public isActive = new BehaviorSubject<boolean>(false);

  public setIsActive(isActive: boolean): void {
    this.isActive.next(isActive);
  }

  public setInfoContent(content: string): void {
    this.infoContent.next(content);
  }

  public showInfoMessage(content: string, delay?: number): void {
    this.isActive.next(true);
    this.infoContent.next(content);

    setTimeout(() => {
      this.isActive.next(false);
    }, delay || infoMessageConfig.delay)
  }
}
