import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.styl']
})
export class ProductGetComponent implements OnInit {

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
