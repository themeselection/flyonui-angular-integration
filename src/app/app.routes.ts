import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { OverlayComponent } from './pages/overlay/overlay.component';
import { FormElementsComponent } from './pages/form-elements/form-elements.component';
import { CardComponent } from './pages/card/card.component';
import { AdvanceFormComponent } from './pages/advance-form/advance-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'overlay', component: OverlayComponent },
  { path: 'form-elements', component: FormElementsComponent },
  { path: 'card', component: CardComponent },
  { path: 'advance-form', component: AdvanceFormComponent },
];
