import { ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";
export declare class FormValidationDirective {
    private el;
    formData: NgForm;
    constructor(el: ElementRef);
    onFocusout(target: any): void;
}
