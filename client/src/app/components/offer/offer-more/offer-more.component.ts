import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'offer-more',
  templateUrl: './offer-more.component.html',
  styleUrls: ['./offer-more.component.styl']
})
export class OfferMoreComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() description: string;
  @Input() type: string;
  @Input() address: string;
  @Input() buttonText: string;

  ngOnInit(): void {
  }

  public getProduct () {
    const xd: any = '../../../assets/uploads/kostek.exe'
    window.location = xd;
  }

}
