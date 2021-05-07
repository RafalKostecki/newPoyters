import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.styl']
})
export class EditProfileComponent implements OnInit {

  private categoryName: string = "Edit profile";
  constructor(
    private data: UiService
  ) {}

  
  ngOnInit() {
    this.data.changeCategory(this.categoryName);
  }

}
