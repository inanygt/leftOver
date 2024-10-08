import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeListComponent } from './search-recipe-list.component';

describe('SearchRecipeListComponent', () => {
  let component: SearchRecipeListComponent;
  let fixture: ComponentFixture<SearchRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRecipeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
