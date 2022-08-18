import { Component } from "@angular/core";


@Component({
    selector:"app-contador",
    templateUrl:"./counter.component.html",
    styleUrls:["./counter.component.css"]
})
export class CounterComponent{
    // puedo crear variables
    // title = 'contador';
    contador:number=23


    handleCount( value: number ){
        this.contador = value;
    }

}