import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
 
@Injectable()
export class ClienteService {

    private clientes: Object[] = [];
    private nome: String;
	private apiUrl = 'https://dummy-blue-hunter.mybluemix.net/user/by-name/';  // URL para web api
	
	/**
	* Método construtor
	* @param http: Http
	*/
	constructor(private http: Http) { }
 
	/**
	* Listando os clientes
	*/
	getClientes(){
	 	return this.http.get(this.apiUrl)
		 	.map((res:Response) => res.json());
	}
}
