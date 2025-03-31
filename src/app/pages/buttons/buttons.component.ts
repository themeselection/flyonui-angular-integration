import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonItemComponent } from '../../components/button-item/button-item.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule, ButtonItemComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {}
