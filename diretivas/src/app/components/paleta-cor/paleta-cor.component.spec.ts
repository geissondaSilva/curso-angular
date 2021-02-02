import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletaCorComponent } from './paleta-cor.component';

describe('PaletaCorComponent', () => {
  let component: PaletaCorComponent;
  let fixture: ComponentFixture<PaletaCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletaCorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletaCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
