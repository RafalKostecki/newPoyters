import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { IUserData } from '../../interfaces/userData.interface';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  public portfolioProjects: Object;
  private categoryName: string = "Profile";
  public userData: IUserData;

  constructor(
    private data: UiService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.data.changeCategory(this.categoryName);

    this.userService.userData.subscribe(data => {
      this.userData = data;
    })
  }

}
