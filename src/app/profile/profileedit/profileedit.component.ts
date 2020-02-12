import { Component, OnInit } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
import { User } from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.less']
})
export class ProfileeditComponent implements OnInit {
  userId: string = localStorage.getItem('userId');
  userData: User;
  userUpdate: User;
  constructor(private getData: GetdataService, private router: Router) {
    this.readUser();
  }

  ngOnInit() {
  }
  readUser() {
    this.getData.getUser(this.userId)
      .subscribe((data) => {
        this.userData = {
          id: data._id,
          login: data.login,
          email: data.email,
        };
      });
  }
  updateUser() {
    this.getData.updateUser(this.userId, this.userUpdate)
      .subscribe((res) => {
        this.router.navigateByUrl('/profile');
      }, (error => {
        console.log(error);
      }));
  }
}
