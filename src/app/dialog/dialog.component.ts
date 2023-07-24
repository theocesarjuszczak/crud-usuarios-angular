import { Component, Inject } from '@angular/core';
import { usuario } from '../lista/lista.component';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  usuario: usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  };

  acao: string = 'Criar';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: usuario,
    public dialogRef: MatDialogRef<DialogComponent>,
  ) {
    if (data) {
      this.usuario = data;
      this.acao = 'Atualizar';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
