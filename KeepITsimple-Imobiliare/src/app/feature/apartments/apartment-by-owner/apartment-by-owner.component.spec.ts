import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentByOwnerComponent } from './apartment-by-owner.component';

describe('ApartmentByOwnerComponent', () => {
  let component: ApartmentByOwnerComponent;
  let fixture: ComponentFixture<ApartmentByOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentByOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentByOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
