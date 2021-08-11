import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyResetFormComponent } from './verify-reset-form.component';

describe('VerifyResetFormComponent', () => {
  let component: VerifyResetFormComponent;
  let fixture: ComponentFixture<VerifyResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyResetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
