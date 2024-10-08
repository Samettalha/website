import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakkindaComponent } from './hakkinda.component';

describe('HakkindaComponent', () => {
  let component: HakkindaComponent;
  let fixture: ComponentFixture<HakkindaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HakkindaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HakkindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
