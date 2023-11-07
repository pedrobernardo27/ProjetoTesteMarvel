import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagem } from 'src/app/models/personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = 'https://localhost:7019/api/Personagem/listaPersonagem?nome=';

  constructor(private httpClient: HttpClient) { }

    async BuscarPersonagem(nome : string) {
    return await this.httpClient.get<Personagem[]>(this.apiUrl + nome)
    .toPromise()
    .then(personagem => {return personagem});
  }
}


