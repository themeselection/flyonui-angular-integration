import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsItemComponent } from '../../components/form-elements-item/form-elements-item.component';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [CommonModule, FormElementsItemComponent],
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.css',
})
export class FormElementsComponent {}
