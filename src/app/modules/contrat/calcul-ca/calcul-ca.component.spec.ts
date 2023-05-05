import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculCAComponent } from './calcul-ca.component';

describe('CalculCAComponent', () => {
  let component: CalculCAComponent;
  let fixture: ComponentFixture<CalculCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculCAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
