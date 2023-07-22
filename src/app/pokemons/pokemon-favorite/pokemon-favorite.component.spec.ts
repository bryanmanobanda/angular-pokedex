import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoriteComponent } from './pokemon-favorite.component';

describe('PokemonFavoriteComponent', () => {
  let component: PokemonFavoriteComponent;
  let fixture: ComponentFixture<PokemonFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
