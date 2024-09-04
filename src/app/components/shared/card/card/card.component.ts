import { Component, Input, inject } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { CardIngredientModalComponent } from '../../../ingredients/card-ingredient-modal/card-ingredient-modal.component';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="img-container" (click)="open()">
        <img src="{{ recipe.image }}" class="card-img-top" alt="..." />
        <div class="more-info">Let's cook</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ recipe.title }}</h3>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <!-- Missed ingredients -->
        <h5 class="subtitle">
          Missing ingredients:
          <span class="ingredients-count">{{
            recipe.missedIngredientCount
          }}</span>
        </h5>
        <div *ngFor="let missedIngredient of recipe.missedIngredients">
          {{ missedIngredient.name }}
        </div>

        <div class="likes-container">
          {{ recipe.likes }}
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() recipe: any;

  private modalService = inject(NgbModal);

  open() {
    const modalOptions: NgbModalOptions = {
      animation: true,
      centered: true,
    };

    const modalRef = this.modalService.open(
      CardIngredientModalComponent,
      modalOptions,
    );
    modalRef.componentInstance.name = 'World';
  }
}
