import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Pacote } from '../models/Pacote';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './novaTransferencia.component.html',
    styleUrls: ['./novaTransferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number = 10;
  destino: number = 100;
  pac : Pacote;

  constructor(private service: TransferenciaService,
              private router: Router) { }

  transferir() {
      this.pac = new Pacote();
        this.pac.valor = this.valor;
        this.pac.destino = this.destino;
        this.pac.data = new Date();

      this.service.adicionar(this.pac).subscribe(
        (resultado) => {
          console.log(resultado);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino =0;
  }
}
