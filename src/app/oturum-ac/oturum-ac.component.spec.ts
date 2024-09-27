import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OturumAcComponent } from './oturum-ac.component';

describe('OturumAcComponent', () => {
  let component: OturumAcComponent;
  let fixture: ComponentFixture<OturumAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OturumAcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OturumAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
