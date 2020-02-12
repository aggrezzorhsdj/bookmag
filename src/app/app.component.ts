import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Bookmag';
  constructor(private authService: AuthService) {}
  ngOnInit() {}
}
