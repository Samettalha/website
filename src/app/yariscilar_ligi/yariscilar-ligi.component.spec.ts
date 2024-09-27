import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YariscilarLigiComponent } from './yariscilar-ligi.component';

describe('YariscilarLigiComponent', () => {
  let component: YariscilarLigiComponent;
  let fixture: ComponentFixture<YariscilarLigiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YariscilarLigiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YariscilarLigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
