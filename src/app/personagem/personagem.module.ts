import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent } from './personagem/personagem.component';
import { PersonagemService } from './service/personagem.service';


@NgModule({
  declarations: [
    PersonagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagemComponent
  ],
  providers:[
    PersonagemService
  ]
})
export class PersonagemModule { }
