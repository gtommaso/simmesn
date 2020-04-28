
import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { OperatoriService } from '../services/operatoriservice';
import { Operatore } from '../domain/operatore';


@Component({
    selector: 'MultiSelect',
    templateUrl: './multiselect.component.html',
    styles: [`
        :host ::ng-deep .ui-multiselect {
            min-width: 15em;
        }
        :host ::ng-deep .ui-multiselected-item-token,
        :host ::ng-deep .ui-multiselected-empty-token {
            padding: 2px 4px;
            margin: 0 0.286em 0 0;
            display: inline-block;
            vertical-align:middle;
            height: 1.857em;
        }
        :host ::ng-deep .ui-multiselected-item-token {
            background: #007ad9;
            color: #ffffff;
        }
        :host ::ng-deep .ui-multiselected-empty-token {
            background: #d95f00;
            color: #ffffff;
        }
    `]
})
export class MultiSelect {

    esitoOperatori: Operatore[];
    operatore:Operatore;
    operatoriService:OperatoriService;
    elem:SelectItem;
    operatori: SelectItem[];
    strutture: SelectItem[];
    selectedStrutture: string[] = [];
    selectedOperatori: string[] = [];
    items: SelectItem[];
    item: string;
 
    
    constructor() {

        this.operatoriService.getAllOperatori().then(esitoOperatori => this.esitoOperatori = esitoOperatori);
 
         for (let i = 0; i < this.esitoOperatori.length; i++) {
            this.elem.label=this.esitoOperatori[i].nome;
            this.elem.value=this.esitoOperatori[i].id;;
            this.operatori.push(this.elem);
        }

      /*  this.operatori.push() = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' },
        ];*/

        this.items = [];
       
    }
}
