import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormItemComponent } from './advance-form-item.component';

describe('AdvanceFormItemComponent', () => {
  let component: AdvanceFormItemComponent;
  let fixture: ComponentFixture<AdvanceFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFormItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
