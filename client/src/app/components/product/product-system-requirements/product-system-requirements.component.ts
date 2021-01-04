import { Component, OnInit, Input } from '@angular/core';
import { IProductTagData } from '../../../interfaces/productTagData.interface';


@Component({
  selector: 'product-system-requirements',
  templateUrl: './product-system-requirements.component.html',
  styleUrls: ['./product-system-requirements.component.styl']
})
export class ProductSystemRequirementsComponent implements OnInit {

  constructor() { }

  @Input() min: IProductTagData[];
  @Input() rec: IProductTagData[];

  ngOnInit(): void {
  }

}
