import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesAssitidosComponent } from './filmes-assitidos.component';

describe('FilmesAssitidosComponent', () => {
  let component: FilmesAssitidosComponent;
  let fixture: ComponentFixture<FilmesAssitidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesAssitidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesAssitidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
