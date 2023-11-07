import { EventoResult } from './../../models/evento-result';
import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../service/personagem.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {
  public lstPersonagens: any[] = [];
  public eventos : string[] = [];

  constructor(private personagemService : PersonagemService) { }

  async ngOnInit() {}

  async Buscar(nome : string) {

    let lstPersonagensResult = await this.personagemService.BuscarPersonagem(nome);

    lstPersonagensResult.forEach(item => {

      this.lstPersonagens.push({
        id:item.id,
        nome:item.nome,
        descricao: item.descricao,
        imagemPersonagem: item.imagemPersonagem,
        eventoResult: item.eventoResult
      });
    });
  }

  public SepararStringEvento(evento : string){
    this.eventos = [];
    let str1 = evento.split('&&');

    for(let i = 0; i< str1.length; i++){
      let str2 = str1[i].split('/n',4);

      this.eventos.push(str2[0]);
      this.eventos.push(str2[1]);
      this.eventos.push(str2[2]);
      this.eventos.push(str2[3]);
    }
  }
}
