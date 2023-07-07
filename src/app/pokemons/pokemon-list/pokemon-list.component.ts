import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonIds: string[];
  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.pokemonServices.getPokemonList().subscribe({
      next: (data) => {
        this.pokemonIds = [];
        data.results.forEach((item:any) => {
          this.pokemonIds.push(item.url.slice(0,-1).split('/').pop());
          
        });
      }
    })
  }

}
