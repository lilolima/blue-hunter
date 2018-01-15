import { Pipe, PipeTransform } from '@angular/core';
import { ClienteComponent } from 'app/cliente/cliente.component';
@Pipe({
    name: 'filtroPorCliente'
})
export class FiltroPorCliente implements PipeTransform {

    transform(clientes: ClienteComponent[], digitado: string): ClienteComponent[] {
        console.log("Clientes: ", clientes);
        console.log("Digitado: ", digitado);
        digitado = digitado.toLowerCase();
        return clientes.filter(cliente => cliente.fullName.toLowerCase().includes(digitado));
    }
}