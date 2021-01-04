import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-introduction',
  templateUrl: './product-introduction.component.html',
  styleUrls: ['./product-introduction.component.styl']
})
export class ProductIntroductionComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() type: string;
  @Input() introDescription: string;
  @Input() icon: string;

  ngOnInit(): void {
  }

}
