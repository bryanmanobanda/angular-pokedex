import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatCardModule} from '@angular/material/card';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';
import{MatIconModule} from '@angular/material/icon';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page/pokemon-detail-page.component'
import {MatDialogModule} from '@angular/material/dialog';
import { PokemonAddComentComponent } from './pokemon-add-coment/pokemon-add-coment.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonListByTypeComponent,
    PokemonDetailComponent,
    PokemonFavoriteComponent,
    MyFavoritesComponent,
    PokemonDetailPageComponent,
    PokemonAddComentComponent,
  ],
  imports: [
    CommonModule,MatFormFieldModule, FormsModule, MatInputModule,MatDialogModule,MatGridListModule,MatIconModule, MatCardModule, RouterModule.forChild([
      {path: 'pokemon-list', component:PokemonListComponent},
      {path: 'pokemon-my-favorites', component:MyFavoritesComponent},
      {path: 'pokemon-list-by-type/:id', component:PokemonListByTypeComponent},
      {path: 'pokemon-details/:id', component:PokemonDetailPageComponent},
    ]),
  ]
})
export class PokemonsModule { }
