import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookseditComponent } from './booksedit.component';

describe('BookseditComponent', () => {
  let component: BookseditComponent;
  let fixture: ComponentFixture<BookseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
