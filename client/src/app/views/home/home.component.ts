import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})

@Injectable()
export class HomeComponent implements OnInit {

  public projects: Object;
  private categoryName: string = "Home";

  constructor(
    private http: HttpClient,
    private uiService: UiService
  ) {
    this.getJSON().subscribe(
      data => this.projects = data
    );
  }

  ngOnInit() {
    this.uiService.changeCategory(this.categoryName);
  }

  public getJSON(): Observable<any> {
    return this.http.get("./app/assets/data/projects.json")
  }
}
