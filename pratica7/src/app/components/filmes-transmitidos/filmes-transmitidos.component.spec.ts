import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesTransmitidosComponent } from './filmes-transmitidos.component';

describe('FilmesTransmitidosComponent', () => {
  let component: FilmesTransmitidosComponent;
  let fixture: ComponentFixture<FilmesTransmitidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesTransmitidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesTransmitidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
