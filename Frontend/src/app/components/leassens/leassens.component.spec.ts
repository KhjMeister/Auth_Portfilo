import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeassensComponent } from './leassens.component';

describe('LeassensComponent', () => {
  let component: LeassensComponent;
  let fixture: ComponentFixture<LeassensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeassensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeassensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
