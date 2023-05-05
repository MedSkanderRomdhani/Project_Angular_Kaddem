import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeformComponent } from './equipeform.component';

describe('EquipeformComponent', () => {
  let component: EquipeformComponent;
  let fixture: ComponentFixture<EquipeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
