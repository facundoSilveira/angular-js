import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spaiderman', 'Ironman', 'Tor'];
    borrado= '';
    validate= false; 

    borrar():void{
      console.log("borrando...");
      this.borrado = this.heroes.pop() || '';
      this.validate = true;
    }
}
