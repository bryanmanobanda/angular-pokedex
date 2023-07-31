import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddComentComponent } from '../pokemon-add-coment/pokemon-add-coment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss']
})
export class PokemonDetailPageComponent implements OnInit, OnDestroy {
  pokemonData: any;
  comments: any[] = [];
  pokemonSubscription: Subscription;

  constructor(
    private pokemonService:PokemonService,
    private activateRoute:ActivatedRoute,
    private firestore:AngularFirestore,
    private dialog:MatDialog) { }

  ngOnDestroy(): void {
    if(this.pokemonSubscription)
      this.pokemonSubscription.unsubscribe
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if(id){
        console.log(id);
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((ret) => {
          this.pokemonData = ret;
          this.loadComments();
        });
      }
    });
    //escenarios en los cuales el pokemonData == null
  }

private loadComments(){
  let document =  this.firestore
  .collection('pokemons')
  .doc(this.pokemonData.id.toString())
  .valueChanges();
  this.pokemonSubscription = document
  .subscribe((ret:any) => {
    console.log(JSON.stringify(ret));
    if(ret.comments){
      this.comments = ret.comments;
    }
  });
}

  showDialog(){
    let dialogRef = this.dialog.open(PokemonAddComentComponent);
    dialogRef.afterClosed().subscribe((result) =>{
      console.log(JSON.stringify(result));
      let commentsToInsert = this.comments;
      commentsToInsert.push(result);
      /*this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .set({
        comments: comments,
      }, 
      {
        merge:true,
      });*/
      this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .update({
        comments:commentsToInsert,
      });
    });
  }

}
