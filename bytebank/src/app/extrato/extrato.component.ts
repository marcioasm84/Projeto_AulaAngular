import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  listaTransferencias: any[];

  constructor(private service: TransferenciaService) { 
    this.listaTransferencias = [];
  }

  ngOnInit(): void {
    console.log('ExtratoComponente');
    
    this.listaTransferencias = this.service.transferencias;
  }

}
