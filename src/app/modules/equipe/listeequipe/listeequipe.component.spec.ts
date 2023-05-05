import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeequipeComponent } from './listeequipe.component';

describe('ListeequipeComponent', () => {
  let component: ListeequipeComponent;
  let fixture: ComponentFixture<ListeequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
