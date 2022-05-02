import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Rxjs
import { delay, Observable } from 'rxjs';
// Models
import { PokemonDetails } from './pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonApiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonDetails(pokemonName: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokemonApiUrl}/pokemon/${pokemonName}`)
      .pipe(delay(10000));
  }
}
