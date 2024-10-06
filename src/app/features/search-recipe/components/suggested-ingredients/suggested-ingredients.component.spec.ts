import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedIngredientsComponent } from './suggested-ingredients.component';

describe('SuggestedIngredientsComponent', () => {
  let component: SuggestedIngredientsComponent;
  let fixture: ComponentFixture<SuggestedIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestedIngredientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestedIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
