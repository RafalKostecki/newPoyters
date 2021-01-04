import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.styl']
})

@Injectable()
export class PortfolioComponent implements OnInit {

  public portfolioProjects;
  private categoryName = "Portfolio";

  constructor(private http: HttpClient, private data: UiService) {
    this.getJSON().subscribe(data => {
        this.portfolioProjects = data;
    });
  }

  ngOnInit() {
    this.data.changeCategory(this.categoryName)
  }

  public getJSON(): Observable<any> {
    return this.http.get("./app/assets/data/portfolio.json")
  }
}
