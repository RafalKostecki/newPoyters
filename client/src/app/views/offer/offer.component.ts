import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.styl']
})
export class OfferComponent implements OnInit {

  private categoryName: string = "Offer";

  constructor(
    private data: UiService
  ) {}

  
  public async ngOnInit() {
    this.data.changeCategory(this.categoryName);
  }

}
