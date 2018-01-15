import { Injectable, Component, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ClienteComponent } from './cliente.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ClienteService {

	@Input() private nome: string;
	private clientes: Object[] = [];
	private cliente: ClienteComponent;
	private apiUrl = 'https://dummy-blue-hunter.mybluemix.net/user/by-name/' + this.nome; 
	
	constructor(private http: Http) { }
	
	getClientes() {
		return this.http.get(this.apiUrl)
			.map((res: Response) => res.json(),
			console.log(this.apiUrl));
	}


}
