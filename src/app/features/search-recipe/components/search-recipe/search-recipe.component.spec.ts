import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeComponent } from './search-recipe.component';

describe('SearchRecipeComponent', () => {
  let component: SearchRecipeComponent;
  let fixture: ComponentFixture<SearchRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
