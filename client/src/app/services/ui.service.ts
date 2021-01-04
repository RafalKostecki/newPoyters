import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public category = new BehaviorSubject<string>('Unknown');

  public changeCategory(categoryName: string): void {
    this.category.next(categoryName);
  }
}
