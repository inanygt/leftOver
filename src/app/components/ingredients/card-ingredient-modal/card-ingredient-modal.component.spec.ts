import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIngredientModalComponent } from './card-ingredient-modal.component';

describe('CardIngredientModalComponent', () => {
  let component: CardIngredientModalComponent;
  let fixture: ComponentFixture<CardIngredientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardIngredientModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIngredientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
