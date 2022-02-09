import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  //Necessário para devolver para a tag como um evento ($event)
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor( private service: TransferenciaService, private router: Router) { 
    this.valor = 0;
    this.destino = 0;
  }

  ngOnInit(): void {
  }

  transferir() {
    console.log('NovaTransferenciaComponente: transferir');
    const transferencia = {valor: this.valor, destino: this.destino };
    this.service.adicionar(transferencia);
    this.limparCampos();
    this.router.navigateByUrl('extrato');
  }

  limparCampos() {
    this.valor= 0;
    this.destino = 0;
  }
}
