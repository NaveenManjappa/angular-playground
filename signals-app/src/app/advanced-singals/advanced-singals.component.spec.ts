import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSingalsComponent } from './advanced-singals.component';

describe('AdvancedSingalsComponent', () => {
  let component: AdvancedSingalsComponent;
  let fixture: ComponentFixture<AdvancedSingalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedSingalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedSingalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
