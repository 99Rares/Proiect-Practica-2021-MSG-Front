import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VreifyEmailComponent } from './vreify-email.component';

describe('VreifyEmailComponent', () => {
  let component: VreifyEmailComponent;
  let fixture: ComponentFixture<VreifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VreifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VreifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
