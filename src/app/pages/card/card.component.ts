import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../components/card-item/card-item.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
