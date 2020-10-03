import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageAvailableComponent } from './coverage-available.component';

describe('CoverageAvailableComponent', () => {
  let component: CoverageAvailableComponent;
  let fixture: ComponentFixture<CoverageAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
