import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrotaskQueueComponent } from './microtask-queue.component';

describe('MicrotaskQueueComponent', () => {
  let component: MicrotaskQueueComponent;
  let fixture: ComponentFixture<MicrotaskQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicrotaskQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrotaskQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
