import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesctooltipComponent } from './desctooltip.component';

describe('DesctooltipComponent', () => {
  let component: DesctooltipComponent;
  let fixture: ComponentFixture<DesctooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesctooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesctooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
