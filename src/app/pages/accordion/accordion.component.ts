import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from '../../components/accordion-group/accordion-group.component';
import { AccordionAvatarComponent } from '../../components/accordion-avatar/accordion-avatar.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, AccordionGroupComponent, AccordionAvatarComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {}
