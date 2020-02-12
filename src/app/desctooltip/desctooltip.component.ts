import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-desctooltip',
  templateUrl: './desctooltip.component.html',
  styleUrls: ['./desctooltip.component.less'],
  animations: [
    trigger('expandDesc', [
      state('init', style({ height: 0, opacity: 0})),
      state('expand', style({ height: '*', opacity: 1})),
      transition('init <=> expand', animate('0.2s'))
    ])
  ]
})
export class DesctooltipComponent implements OnInit {
  isExpanded = false;
  state = 'init';
  @HostListener('mouseover')
  inHover() {
    this.expand();
  }

  @HostListener('mouseout')
  outHover() {
    alert('hello');
    this.expand();
  }
  expand() {
    this.isExpanded = !this.isExpanded;
    this.state = this.isExpanded ? this.state = 'expand' : this.state = 'init';
  }
  constructor() { }
  ngOnInit() {
  }

}
