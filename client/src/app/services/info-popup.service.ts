import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import infoConfig from '../assets/configs/infoConfig.json';

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

  public showInfo(content: string, delay?: number): void {
    console.log(' delay || infoConfig.delay', delay || infoConfig.delay);
    this.isActive.next(true);
    this.infoContent.next(content);

    setTimeout(() => {
      this.isActive.next(false);
    }, delay || infoConfig.delay)
  }
}
