import { Injectable } from '@angular/core';
import { usuario } from './lista.component';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  public get(): usuario[] {
    return [
      { id: 1, nome: 'Gustavo', email: 'gustavo@gmail.com', senha: '23123asd123' },
      { id: 2, nome: 'Sara', email: 'sara@gmail.com', senha: 'asdd123qa' },
      { id: 3, nome: 'Gabriel', email: 'gabriel@gmail.com', senha: '123asd123' },
    ];
  }
}
