import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherhomeComponent } from './weatherhome.component';

describe('WeatherhomeComponent', () => {
  let component: WeatherhomeComponent;
  let fixture: ComponentFixture<WeatherhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
