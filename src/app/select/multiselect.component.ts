
import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { OperatoriService } from '../services/operatoriservice';
import { Operatore } from '../domain/operatore';


@Component({
    providers: [OperatoriService],
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

    esitoOperatori=[];
    operatore:Operatore;
   
    elem:SelectItem;
    operatori: SelectItem[];
    strutture: SelectItem[];
    selectedStrutture: string[] = [];
    selectedOperatori: string[] = [];
    items: SelectItem[];
    item: string;
 
    
 /*   constructor() {

        
        this.operatoriService.getAllOperatori().then(esitoOperatori => this.esitoOperatori = esitoOperatori);
 
         for (let i = 0; i < this.esitoOperatori.length; i++) {
            this.elem.label=this.esitoOperatori[i].nome;
            this.elem.value=this.esitoOperatori[i].id;;
            this.operatori.push(this.elem);
        }*/

    constructor(private  operatoriService:OperatoriService) { }

    ngOnInit() {

        this.operatori=[];
        this.operatoriService.getAllOperatori().subscribe((data: any[])=>{
             this.esitoOperatori = data;
            console.log(this.esitoOperatori);
            //la stampa funziona e il risultato c'è

            for(let operatore of this.esitoOperatori){
                this.elem={value:'',label:''};

                console.log(operatore.nome); //use i instead of 0
                this.elem.label=operatore.nome;
                this.elem.value=operatore.id;;
                this.operatori.push(this.elem);
              }
          }) 

          console.log('daje')

          //non stampa nulla nel for
      
    
    }
}
