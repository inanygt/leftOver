import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeCardComponent } from './search-recipe-card.component';

describe('SearchRecipeCardComponent', () => {
  let component: SearchRecipeCardComponent;
  let fixture: ComponentFixture<SearchRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRecipeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
