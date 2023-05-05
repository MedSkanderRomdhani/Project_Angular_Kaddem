import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepartementComponent } from './form-departement.component';

describe('FormDepartementComponent', () => {
  let component: FormDepartementComponent;
  let fixture: ComponentFixture<FormDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
