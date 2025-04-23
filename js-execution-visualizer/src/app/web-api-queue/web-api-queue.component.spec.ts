import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApiQueueComponent } from './web-api-queue.component';

describe('WebApiQueueComponent', () => {
  let component: WebApiQueueComponent;
  let fixture: ComponentFixture<WebApiQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebApiQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebApiQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
