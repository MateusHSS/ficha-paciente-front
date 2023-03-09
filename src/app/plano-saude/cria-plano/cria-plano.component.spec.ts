import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaPlanoComponent } from './cria-plano.component';

describe('CriaPlanoComponent', () => {
  let component: CriaPlanoComponent;
  let fixture: ComponentFixture<CriaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
