import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAvatarComponent } from './accordion-avatar.component';

describe('AccordionAvatarComponent', () => {
  let component: AccordionAvatarComponent;
  let fixture: ComponentFixture<AccordionAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
