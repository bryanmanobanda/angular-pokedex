import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAddComentComponent } from './pokemon-add-coment.component';

describe('PokemonAddComentComponent', () => {
  let component: PokemonAddComentComponent;
  let fixture: ComponentFixture<PokemonAddComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAddComentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAddComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
