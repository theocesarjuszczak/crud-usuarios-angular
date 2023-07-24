
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ListaService } from './lista.service';


export interface usuario {
  nome: string;
  id: number;
  email: string;
  senha: string;
}


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'nome', 'email', 'senha', 'editar', 'excluir'];
  dataSource: usuario[];

  constructor(public dialog: MatDialog, private listaService: ListaService) {
    this.dataSource = listaService.get();
  }

  openDialog(data?: usuario): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe((result: usuario | undefined) => {
      if (result !== undefined) {
        if (result.id === 0)
          result.id = this.dataSource.length + 1;
        
        this.dataSource.push(result);
      }
      this.table.renderRows();
    });
  }

  deleteUsuario(usuario: usuario) {
    const index = this.dataSource.indexOf(usuario);

    this.dataSource.splice(index, 1);

    this.table.renderRows();
  }
}
