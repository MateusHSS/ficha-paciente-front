import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaFichaComponent } from './edita-ficha.component';

describe('EditaFichaComponent', () => {
  let component: EditaFichaComponent;
  let fixture: ComponentFixture<EditaFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
