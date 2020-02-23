import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {
  @Input()
  values: string[];
  @Output()
  settingValues = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
