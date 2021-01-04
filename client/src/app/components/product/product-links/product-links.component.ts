import { Component, OnInit, Input } from '@angular/core';
import { IProductTagData } from '../../../interfaces/productTagData.interface';

@Component({
  selector: 'product-links',
  templateUrl: './product-links.component.html',
  styleUrls: ['./product-links.component.styl']
})
export class ProductLinksComponent implements OnInit {

  constructor() { }

  @Input() links: IProductTagData[];

  ngOnInit(): void {
  }

}
