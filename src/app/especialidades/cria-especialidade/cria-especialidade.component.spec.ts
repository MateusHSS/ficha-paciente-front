import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaEspecialidadeComponent } from './cria-especialidade.component';

describe('CriaEspecialidadeComponent', () => {
  let component: CriaEspecialidadeComponent;
  let fixture: ComponentFixture<CriaEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
