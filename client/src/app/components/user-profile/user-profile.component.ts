import { Component, OnInit, Input } from '@angular/core';
import { InfoPopupService } from '../../services/info-popup.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.styl']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private infoPopupService: InfoPopupService
  ) { }

  @Input() username: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() mail: string;
  @Input() created: number;
  @Input() role: number;
  @Input() emailVerified: boolean;

  private mailNotVerified = 'Your mail is not verified. Take a look at your mailbox';

  ngOnInit(): void {
    console.log('emailVerified', this.emailVerified)
    console.log('created', this.created);
    if (!this.emailVerified) {
      this.infoPopupService.showInfoMessage(this.mailNotVerified, 10000);
    }
  }

}
