import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitOlComponent } from './kayit-ol.component';

describe('KayitOlComponent', () => {
  let component: KayitOlComponent;
  let fixture: ComponentFixture<KayitOlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KayitOlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KayitOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
