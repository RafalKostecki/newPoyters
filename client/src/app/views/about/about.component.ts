import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})
export class AboutComponent implements OnInit {

  constructor(private data: UiService) { }

  ngOnInit() {
    this.data.changeCategory('About');
  }

}
