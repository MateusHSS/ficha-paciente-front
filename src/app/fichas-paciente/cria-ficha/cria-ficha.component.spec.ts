import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaFichaComponent } from './cria-ficha.component';

describe('CriaFichaComponent', () => {
  let component: CriaFichaComponent;
  let fixture: ComponentFixture<CriaFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
