import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppBottomNavComponent } from './app-bottom-nav.component';

describe('AppBottomNavComponent', () => {
  let component: AppBottomNavComponent;
  let fixture: ComponentFixture<AppBottomNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppBottomNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
