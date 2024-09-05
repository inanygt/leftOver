import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedIngredientsComponent } from './added-ingredients.component';

describe('AddedIngredientsComponent', () => {
  let component: AddedIngredientsComponent;
  let fixture: ComponentFixture<AddedIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddedIngredientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddedIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
