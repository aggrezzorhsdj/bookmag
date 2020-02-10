import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksaddComponent } from './booksadd.component';

describe('BooksaddComponent', () => {
  let component: BooksaddComponent;
  let fixture: ComponentFixture<BooksaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
