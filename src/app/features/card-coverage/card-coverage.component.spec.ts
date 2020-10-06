import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoverageComponent } from './card-coverage.component';

describe('CardCoverageComponent', () => {
  let component: CardCoverageComponent;
  let fixture: ComponentFixture<CardCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
