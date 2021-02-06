import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityOptionComponent } from './sustainability-option.component';

describe('SustainabilityOptionComponent', () => {
  let component: SustainabilityOptionComponent;
  let fixture: ComponentFixture<SustainabilityOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
