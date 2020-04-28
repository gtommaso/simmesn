import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MultiSelect} from './select/multiselect.component';
import {MultiSelectModule} from 'primeng/multiselect';
 

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        MultiSelect
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        MultiSelectModule,
        
    
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
