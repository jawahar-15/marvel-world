import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMarvelComponent } from './my-marvel.component';

describe('MyMarvelComponent', () => {
  let component: MyMarvelComponent;
  let fixture: ComponentFixture<MyMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMarvelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
