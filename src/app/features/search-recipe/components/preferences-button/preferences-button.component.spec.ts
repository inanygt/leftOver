import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesButtonComponent } from './preferences-button.component';

describe('PreferencesButtonComponent', () => {
  let component: PreferencesButtonComponent;
  let fixture: ComponentFixture<PreferencesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreferencesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
