import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { productsRoot } from '../../assets/data/products/productsRoot';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  constructor(
    private data: UiService,
    private route: ActivatedRoute  
  ) { }

  private sub;
  public product;


  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => {
        this.product= productsRoot[v.productKey]
      });

    this.data.changeCategory(this.product.categoryName)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
