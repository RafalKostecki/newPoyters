import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {

  public currentCategory: string;

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.uiService.category.subscribe(cat => this.currentCategory = cat)
  }
}