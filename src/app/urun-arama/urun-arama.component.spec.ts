import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunAramaComponent } from './urun-arama.component';

describe('UrunAramaComponent', () => {
  let component: UrunAramaComponent;
  let fixture: ComponentFixture<UrunAramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrunAramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrunAramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
