import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { productsRoot } from '../../assets/data/products/productsRoot';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.styl']
})
export class ProductViewComponent implements OnInit {

  constructor(
    private data: UiService,
    private route: ActivatedRoute  
  ) { }

  private sub;
  public productData;


  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => this.productData = productsRoot[v.productKey]);

    this.data.changeCategory(this.productData.categoryName)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
