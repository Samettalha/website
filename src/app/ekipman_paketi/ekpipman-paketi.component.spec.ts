import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkpipmanPaketiComponent } from './ekpipman-paketi.component';

describe('EkpipmanPaketiComponent', () => {
  let component: EkpipmanPaketiComponent;
  let fixture: ComponentFixture<EkpipmanPaketiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkpipmanPaketiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EkpipmanPaketiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
