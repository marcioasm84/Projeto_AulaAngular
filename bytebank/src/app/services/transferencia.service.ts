import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  
  private listaTransferencias: any[] = [];

  constructor() { 
  }

  get transferencias(): any[] {
    return this.listaTransferencias;
  }

  public adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);

    console.log('TransferenciaService: transfencia adicionada');
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
