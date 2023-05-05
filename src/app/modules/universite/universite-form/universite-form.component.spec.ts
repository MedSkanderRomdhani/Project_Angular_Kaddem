import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteFormComponent } from './universite-form.component';

describe('UniversiteFormComponent', () => {
  let component: UniversiteFormComponent;
  let fixture: ComponentFixture<UniversiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
