import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else if (localStorage.getItem('access_token')){
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
