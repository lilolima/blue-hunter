import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroPorCliente'
})
export class FiltroPorCliente implements PipeTransform {

    transform(clientes, digitado): any {
        console.log("Clientes: ", clientes);
        console.log("Digitado: ", digitado);
        digitado = digitado.toLowerCase();
        return clientes.filter(cliente => cliente.fullName.toLowerCase().includes(digitado));
    }
}