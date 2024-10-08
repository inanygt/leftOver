import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
   let service: RecipesService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(RecipesService);
   });

   xit('should be created', () => {
      expect(service).toBeTruthy();
   });
});
