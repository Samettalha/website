import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorTeklifAlComponent } from './motor-teklif-al.component';

describe('MotorTeklifAlComponent', () => {
  let component: MotorTeklifAlComponent;
  let fixture: ComponentFixture<MotorTeklifAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorTeklifAlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorTeklifAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
