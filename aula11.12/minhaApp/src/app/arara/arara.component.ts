import { Component } from '@angular/core';

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrl: './arara.component.css'
})
export class AraraComponent {
  nome:string = 'Arara';
  imagem:string = 'data:image/jpeg;base64,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'
  descricao:string = 'A arara é linda'
  link:string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fagapornisbh.com.br%2Fproduto%2Farara-vermelha%2F&psig=AOvVaw3EPYOEcCoFGHU_76m9RMb7&ust=1702409272756000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj37fKOiIMDFQAAAAAdAAAAABAD'

  public getToString():string{
    return this.nome + ' - ' + this.descricao
  }
}
