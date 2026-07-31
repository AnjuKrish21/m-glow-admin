import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MgButtonComponent } from './mg-button.component';

describe('MgButtonComponent', () => {
  let component: MgButtonComponent;
  let fixture: ComponentFixture<MgButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MgButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
