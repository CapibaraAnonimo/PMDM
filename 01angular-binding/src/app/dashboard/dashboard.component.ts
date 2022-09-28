import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = 'Miguel';
  avatarUrl = 'https://avatars.githubusercontent.com/u/48221255?v=4'
  inputName = '';


  constructor() {
  }

  changeAvatar() {
    if (this.avatarUrl == 'https://avatars.githubusercontent.com/u/48221255?v=4') {
      this.avatarUrl = 'https://developeronfire.com/assets/images/JohnPapa.png';
    } else if (this.avatarUrl == 'https://developeronfire.com/assets/images/JohnPapa.png') {
      this.avatarUrl = 'https://avatars.githubusercontent.com/u/48221255?v=4';
    }
  }

  ngOnInit(): void {
  }

}
