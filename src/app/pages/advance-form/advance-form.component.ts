import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceFormItemComponent } from '../../components/advance-form-item/advance-form-item.component';

@Component({
  selector: 'app-advance-form',
  standalone: true,
  imports: [CommonModule, AdvanceFormItemComponent],
  templateUrl: './advance-form.component.html',
  styleUrl: './advance-form.component.css',
})
export class AdvanceFormComponent {}
