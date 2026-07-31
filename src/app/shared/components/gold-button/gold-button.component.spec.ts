import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoldButtonComponent } from './gold-button.component';

describe('GoldButtonComponent', () => {
  let component: GoldButtonComponent;
  let fixture: ComponentFixture<GoldButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GoldButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
