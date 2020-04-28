import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operatore } from '../domain/operatore';

@Injectable()
export class OperatoriService {

    constructor(private http: HttpClient) {}

    getAllOperatori() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Operatore[]> res.data)
            .then(data => data);
    }
}
