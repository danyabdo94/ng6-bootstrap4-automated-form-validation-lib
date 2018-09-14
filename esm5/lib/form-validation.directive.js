/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
var FormValidationDirective = /** @class */ (function () {
    function FormValidationDirective(el) {
        this.el = el;
        if (this.el.nativeElement.required) {
            this.el.nativeElement.insertAdjacentHTML("afterend", '\n<div class="invalid-feedback">* Please Enter a ' +
                el.nativeElement.name +
                ".</div>");
        }
    }
    /**
     * @param {?} target
     * @return {?}
     */
    FormValidationDirective.prototype.onFocusout = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        if (this.el.nativeElement.required) {
            if (this.el.nativeElement.value != "") {
                this.el.nativeElement.classList.remove("is-invalid");
            }
            else {
                this.el.nativeElement.classList.add("is-invalid");
            }
        }
        if (this.el.nativeElement.type == "number") {
            if (Number(this.el.nativeElement.min || -999999999999999) >
                Number(this.el.nativeElement.value)) {
                this.formData.form.controls[this.el.nativeElement.name].setErrors({ incorrect: true });
                this.el.nativeElement.classList.add("is-invalid");
            }
            else if (Number(this.el.nativeElement.max || 999999999999999) <
                Number(this.el.nativeElement.value)) {
                this.formData.form.controls[this.el.nativeElement.name].setErrors({ incorrect: true });
                this.el.nativeElement.classList.add("is-invalid");
            }
        }
    };
    FormValidationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[enlFormValidation]'
                },] }
    ];
    /** @nocollapse */
    FormValidationDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FormValidationDirective.propDecorators = {
        formData: [{ type: Input, args: ["formData",] }],
        onFocusout: [{ type: HostListener, args: ["input", ["$event.target"],] }]
    };
    return FormValidationDirective;
}());
export { FormValidationDirective };
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formData;
    /** @type {?} */
    FormValidationDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tdmFsaWRhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQVN0QyxpQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDaEMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3RDLFVBQVUsRUFDVixtREFBbUQ7Z0JBQ25ELEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSTtnQkFDckIsU0FBUyxDQUNWLENBQUM7U0FDSDtLQUNGOzs7OztJQUdELDRDQUFVOzs7O0lBRFYsVUFDVyxNQUFNO1FBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUMxQyxJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDbkM7Z0JBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25EO2lCQUFNLElBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDbkM7Z0JBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7S0FDRjs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkFMbUIsVUFBVTs7OzJCQVEzQixLQUFLLFNBQUMsVUFBVTs2QkFhaEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzs7a0NBckIxQzs7U0FNYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbmxGb3JtVmFsaWRhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlIHtcblxuICBASW5wdXQoXCJmb3JtRGF0YVwiKSBmb3JtRGF0YTogTmdGb3JtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyZW5kXCIsXG4gICAgICAgICdcXG48ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPiogUGxlYXNlIEVudGVyIGEgJyArXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQubmFtZSArXG4gICAgICAgIFwiLjwvZGl2PlwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0XCJdKVxuICBvbkZvY3Vzb3V0KHRhcmdldCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWludmFsaWRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudHlwZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubWluIHx8IC05OTk5OTk5OTk5OTk5OTkpID5cbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhLmZvcm0uY29udHJvbHNbdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5hbWVdLnNldEVycm9ycyh7IGluY29ycmVjdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC5tYXggfHwgOTk5OTk5OTk5OTk5OTk5KSA8XG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5mb3JtLmNvbnRyb2xzW3RoaXMuZWwubmF0aXZlRWxlbWVudC5uYW1lXS5zZXRFcnJvcnMoeyBpbmNvcnJlY3Q6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==