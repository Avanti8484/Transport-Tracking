import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTruckComponent } from './create-truck.component';

describe('CreateTruckComponent', () => {
  let component: CreateTruckComponent;
  let fixture: ComponentFixture<CreateTruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTruckComponent]
    });
    fixture = TestBed.createComponent(CreateTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
