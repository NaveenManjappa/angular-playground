import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallStackComponent } from './call-stack.component';

describe('CallStackComponent', () => {
  let component: CallStackComponent;
  let fixture: ComponentFixture<CallStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
