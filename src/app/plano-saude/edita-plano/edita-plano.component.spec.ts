import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPlanoComponent } from './edita-plano.component';

describe('EditaPlanoComponent', () => {
  let component: EditaPlanoComponent;
  let fixture: ComponentFixture<EditaPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPlanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
