import { ClienteService } from './cliente.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.template.html',
  styleUrls: ['./cliente.style.css'],
  providers: [ClienteService]
})
export class ClienteComponent {

  private cliente: ClienteComponent;
  public teste: '';
  @Input() fullName: string;
 

  constructor(private clienteService: ClienteService) { }

  public clientes: any[''] = {
    "objects": [
      {
        "fullName": "Joao da Silva",
        "age": 23,
        "email": "jo@email.com",
        "phone": "1199999999",
        "username": "jo_silva"

      },
      {
        "fullName": "Laura Gosling",
        "age": 22,
        "email": "laura@email.com",
        "phone": "1188888888",
        "username": "laura_g"

      },
      {
        "fullName": "Ana Lima",
        "age": 19,
        "email": "ana@email.com",
        "phone": "1177777777",
        "username": "anaaa"
      },
      {
        "fullName": "Vitor Brandão",
        "age": 18,
        "email": "vitor@email.com",
        "phone": "1144444444",
        "username": "vitorBr"
      }
    ],
  }
  /*loadClients(nome: string) {
    this.clienteService.getClientes()
      .subscribe(
      clientes => {
        this.clientes = clientes,
          console.log("Clientes: ", this.clientes)
      },
      error => {
        console.log(error);
      });
    console.log("Nome: ", );
  }*/


}


