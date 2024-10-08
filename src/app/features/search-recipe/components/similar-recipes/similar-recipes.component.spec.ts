import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRecipesComponent } from './similar-recipes.component';

describe('SimilarRecipesComponent', () => {
  let component: SimilarRecipesComponent;
  let fixture: ComponentFixture<SimilarRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarRecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
