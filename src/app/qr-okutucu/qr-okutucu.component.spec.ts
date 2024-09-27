import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QROkutucuComponent } from './qr-okutucu.component';

describe('QROkutucuComponent', () => {
  let component: QROkutucuComponent;
  let fixture: ComponentFixture<QROkutucuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QROkutucuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QROkutucuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
