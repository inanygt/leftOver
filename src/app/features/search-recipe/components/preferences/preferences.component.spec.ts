import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesComponent } from './preferences.component';

describe('PreferencesComponent', () => {
  let component: PreferencesComponent;
  let fixture: ComponentFixture<PreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
