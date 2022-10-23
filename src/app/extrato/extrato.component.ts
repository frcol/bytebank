import { Component, OnInit } from '@angular/core';
import { Pacote } from '../models/Pacote';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit{
  lsPacotes : Pacote[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    console.log("Extrato Init");

    this.service.all().subscribe(
        (pacotes: Pacote[]) => {
        console.table(pacotes);
        this.lsPacotes = pacotes;
      });
  }
}
