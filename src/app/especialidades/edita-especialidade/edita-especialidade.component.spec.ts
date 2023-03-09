import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaEspecialidadeComponent } from './edita-especialidade.component';

describe('EditaEspecialidadeComponent', () => {
  let component: EditaEspecialidadeComponent;
  let fixture: ComponentFixture<EditaEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
