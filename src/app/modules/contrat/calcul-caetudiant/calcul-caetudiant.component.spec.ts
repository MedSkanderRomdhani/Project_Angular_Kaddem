import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculCAEtudiantComponent } from './calcul-caetudiant.component';

describe('CalculCAEtudiantComponent', () => {
  let component: CalculCAEtudiantComponent;
  let fixture: ComponentFixture<CalculCAEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculCAEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculCAEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
