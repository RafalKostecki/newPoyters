import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product;

  ngOnInit(): void {
  }

}
