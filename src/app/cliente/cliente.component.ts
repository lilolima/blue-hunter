import { ClienteService } from './cliente.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [
    ClienteService,
  ]
})
export class ClienteComponent  {
 
  /**
	* Atributos
	*/
	private id: number;
	private nome: string;
  private genero: string;
  private idade: string;
  private email: string;
  private tel: string;
  private username: string;
	private clientes: Object[] = [];
	private cliente: ClienteComponent;

  constructor(private _clienteService: ClienteService) {}
 
	/**
	* Listando clientes
	*/

pegaCliente() {
        this._clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes,
            error => console.log(error));
    }
  
    
}

 
