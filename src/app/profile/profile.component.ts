import {Component, HostListener, OnInit} from '@angular/core';
import {faBook, faCoffee, faUser} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons/faPlusSquare';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  userid: string = localStorage.getItem('userId');
  faUser = faUser;
  faPlus = faPlusSquare;
  faBook = faBook;
  constructor() { }

  ngOnInit() {
  }

}
