import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubworkComponent } from './subwork.component';

describe('SubworkComponent', () => {
  let component: SubworkComponent;
  let fixture: ComponentFixture<SubworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
