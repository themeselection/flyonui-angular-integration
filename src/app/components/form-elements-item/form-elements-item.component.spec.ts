import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementsItemComponent } from './form-elements-item.component';

describe('FormElementsItemComponent', () => {
  let component: FormElementsItemComponent;
  let fixture: ComponentFixture<FormElementsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormElementsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormElementsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
