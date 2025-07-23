import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {

  constructor(private http:HttpClient) {
  }

  public pesquisar(){
    this.http.get("https://pokeapi.co/api/v2/pokemon/charizard").subscribe(dados => {
      console.log(dados);
    })
  }

}
