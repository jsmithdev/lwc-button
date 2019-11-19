import { api, LightningElement } from 'lwc';

export default class lwcButton extends LightningElement {

    @api label
    @api variant
    @api title

    get is(){ return 'lwcButton' }
    
    get classList(){

        const default_classes = 'slds-button '

        if(this.variant === 'brand'){
            return `${default_classes} slds-button_brand`
        }
        else if(this.variant === 'destructive'){
            return `${default_classes} slds-button_destructive`
        }
        else if(this.variant === 'success'){
            return `${default_classes} slds-button_success`
        }
        
        return `${default_classes} slds-button_neutral`
    }

    onclick(){
        this.dispatchEvent(new CustomEvent(
            'click',
            {
                detail: {
                    is: this.is,
                    variant: this.variant,
                }
            } 
        ))
    }
}