import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.styl']
})
export class HomeProjectComponent implements OnInit {
  constructor() { }

  @Input() type: string;
  @Input() image: string;
  @Input() internalLink: string;
  @Input() externalLink: string;
  @Input() title: string;
  @Input() content: string;

  ngOnInit(): void {
  }

}
