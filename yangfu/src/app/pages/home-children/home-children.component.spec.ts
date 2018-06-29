import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildrenComponent } from './home-children.component';

describe('HomeChildrenComponent', () => {
  let component: HomeChildrenComponent;
  let fixture: ComponentFixture<HomeChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
