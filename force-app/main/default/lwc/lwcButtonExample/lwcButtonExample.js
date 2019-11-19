import { LightningElement } from 'lwc';

export default class lwcButtonExample extends LightningElement {
    doSomething(event){
        console.dir(event.detail.is + ' ' + event.detail.variant)
    }
}