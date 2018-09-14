import { Injectable, Component, NgModule, Directive, ElementRef, HostListener, Input, defineInjectable } from '@angular/core';
import '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Ng6Bootstrap4AutomatedFormValidationLibService = /** @class */ (function () {
    function Ng6Bootstrap4AutomatedFormValidationLibService() {
    }
    Ng6Bootstrap4AutomatedFormValidationLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Ng6Bootstrap4AutomatedFormValidationLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ Ng6Bootstrap4AutomatedFormValidationLibService.ngInjectableDef = defineInjectable({ factory: function Ng6Bootstrap4AutomatedFormValidationLibService_Factory() { return new Ng6Bootstrap4AutomatedFormValidationLibService(); }, token: Ng6Bootstrap4AutomatedFormValidationLibService, providedIn: "root" });
    return Ng6Bootstrap4AutomatedFormValidationLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Ng6Bootstrap4AutomatedFormValidationLibComponent = /** @class */ (function () {
    function Ng6Bootstrap4AutomatedFormValidationLibComponent() {
    }
    /**
     * @return {?}
     */
    Ng6Bootstrap4AutomatedFormValidationLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Ng6Bootstrap4AutomatedFormValidationLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'enl-ng6-bootstrap4-automated-form-validation-lib',
                    template: "\n    <p>\n      ng6-bootstrap4-automated-form-validation-lib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    Ng6Bootstrap4AutomatedFormValidationLibComponent.ctorParameters = function () { return []; };
    return Ng6Bootstrap4AutomatedFormValidationLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Ng6Bootstrap4AutomatedFormValidationLibModule = /** @class */ (function () {
    function Ng6Bootstrap4AutomatedFormValidationLibModule() {
    }
    Ng6Bootstrap4AutomatedFormValidationLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [Ng6Bootstrap4AutomatedFormValidationLibComponent, FormValidationDirective],
                    exports: [Ng6Bootstrap4AutomatedFormValidationLibComponent, FormValidationDirective]
                },] }
    ];
    return Ng6Bootstrap4AutomatedFormValidationLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Ng6Bootstrap4AutomatedFormValidationLibService, Ng6Bootstrap4AutomatedFormValidationLibComponent, Ng6Bootstrap4AutomatedFormValidationLibModule, FormValidationDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliL2xpYi9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi9saWIvbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi9saWIvZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIvbGliL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nNkJvb3RzdHJhcDRBdXRvbWF0ZWRGb3JtVmFsaWRhdGlvbkxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbmwtbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nNkJvb3RzdHJhcDRBdXRvbWF0ZWRGb3JtVmFsaWRhdGlvbkxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbmxGb3JtVmFsaWRhdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlIHtcblxuICBASW5wdXQoXCJmb3JtRGF0YVwiKSBmb3JtRGF0YTogTmdGb3JtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImFmdGVyZW5kXCIsXG4gICAgICAgICdcXG48ZGl2IGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPiogUGxlYXNlIEVudGVyIGEgJyArXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQubmFtZSArXG4gICAgICAgIFwiLjwvZGl2PlwiXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0XCJdKVxuICBvbkZvY3Vzb3V0KHRhcmdldCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWludmFsaWRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudHlwZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubWluIHx8IC05OTk5OTk5OTk5OTk5OTkpID5cbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhLmZvcm0uY29udHJvbHNbdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5hbWVdLnNldEVycm9ycyh7IGluY29ycmVjdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC5tYXggfHwgOTk5OTk5OTk5OTk5OTk5KSA8XG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5mb3JtLmNvbnRyb2xzW3RoaXMuZWwubmF0aXZlRWxlbWVudC5uYW1lXS5zZXRFcnJvcnMoeyBpbmNvcnJlY3Q6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZzZCb290c3RyYXA0QXV0b21hdGVkRm9ybVZhbGlkYXRpb25MaWJDb21wb25lbnQgfSBmcm9tICcuL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmc2Qm9vdHN0cmFwNEF1dG9tYXRlZEZvcm1WYWxpZGF0aW9uTGliQ29tcG9uZW50LCBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZzZCb290c3RyYXA0QXV0b21hdGVkRm9ybVZhbGlkYXRpb25MaWJDb21wb25lbnQsRm9ybVZhbGlkYXRpb25EaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nNkJvb3RzdHJhcDRBdXRvbWF0ZWRGb3JtVmFsaWRhdGlvbkxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lEQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixtRUFBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFFBQVEsRUFBRSxvRkFJVDtpQkFFRjs7OzsyREFWRDs7Ozs7OztBQ0FBO0lBVUUsaUNBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2hDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUN0QyxVQUFVLEVBQ1YsbURBQW1EO2dCQUNuRCxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUk7Z0JBQ3JCLFNBQVMsQ0FDVixDQUFDO1NBQ0g7S0FDRjs7Ozs7SUFHRCw0Q0FBVTs7OztJQURWLFVBQ1csTUFBTTtRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDMUMsSUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQ25DO2dCQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtpQkFBTSxJQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDO2dCQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQ25DO2dCQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO0tBQ0Y7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBTG1CLFVBQVU7OzsyQkFRM0IsS0FBSyxTQUFDLFVBQVU7NkJBYWhCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7O2tDQXJCMUM7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0RBQWdELEVBQUUsdUJBQXVCLENBQUM7b0JBQ3pGLE9BQU8sRUFBRSxDQUFDLGdEQUFnRCxFQUFDLHVCQUF1QixDQUFDO2lCQUNwRjs7d0RBVEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==