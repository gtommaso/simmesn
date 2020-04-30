import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operatore } from '../domain/operatore';

@Injectable()
export class OperatoriService {

    REST_API_SERVER: string = "http://localhost:3200/operatori";


    constructor(private httpClient: HttpClient) {}

    getAllOperatori() {
       
                return this.httpClient.get(this.REST_API_SERVER);       

    }
}
