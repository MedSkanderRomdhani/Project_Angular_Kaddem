import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipeFormComponent } from './detail-equipe-form.component';

describe('DetailEquipeFormComponent', () => {
  let component: DetailEquipeFormComponent;
  let fixture: ComponentFixture<DetailEquipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEquipeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEquipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
