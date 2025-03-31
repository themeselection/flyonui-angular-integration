import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-item.component.html',
  styleUrl: './button-item.component.css',
})
export class ButtonItemComponent {
  @Input() addClass: string = '';
  @Input() label: string = '';
}
