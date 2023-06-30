import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input()
  pokemonType: any;
  categoryType:String;
  imageUrl: String;
  constructor() {}

  ngOnInit(): void {
    this.imageUrl = `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
    this.categoryType=this.pokemonType.url.split('/')[6];
  }
}
