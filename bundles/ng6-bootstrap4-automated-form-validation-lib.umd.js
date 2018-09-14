(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng6-bootstrap4-automated-form-validation-lib', ['exports', '@angular/core'], factory) :
    (factory((global['ng6-bootstrap4-automated-form-validation-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Ng6Bootstrap4AutomatedFormValidationLibService = /** @class */ (function () {
        function Ng6Bootstrap4AutomatedFormValidationLibService() {
        }
        Ng6Bootstrap4AutomatedFormValidationLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Ng6Bootstrap4AutomatedFormValidationLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ Ng6Bootstrap4AutomatedFormValidationLibService.ngInjectableDef = i0.defineInjectable({ factory: function Ng6Bootstrap4AutomatedFormValidationLibService_Factory() { return new Ng6Bootstrap4AutomatedFormValidationLibService(); }, token: Ng6Bootstrap4AutomatedFormValidationLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Directive, args: [{
                        selector: '[enlFormValidation]'
                    },] }
        ];
        /** @nocollapse */
        FormValidationDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        FormValidationDirective.propDecorators = {
            formData: [{ type: i0.Input, args: ["formData",] }],
            onFocusout: [{ type: i0.HostListener, args: ["input", ["$event.target"],] }]
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
            { type: i0.NgModule, args: [{
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

    exports.Ng6Bootstrap4AutomatedFormValidationLibService = Ng6Bootstrap4AutomatedFormValidationLibService;
    exports.Ng6Bootstrap4AutomatedFormValidationLibComponent = Ng6Bootstrap4AutomatedFormValidationLibComponent;
    exports.Ng6Bootstrap4AutomatedFormValidationLibModule = Ng6Bootstrap4AutomatedFormValidationLibModule;
    exports.FormValidationDirective = FormValidationDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi9saWIvbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIuc2VydmljZS50cyIsIm5nOi8vbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIvbGliL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbmc2LWJvb3RzdHJhcDQtYXV0b21hdGVkLWZvcm0tdmFsaWRhdGlvbi1saWIvbGliL2Zvcm0tdmFsaWRhdGlvbi5kaXJlY3RpdmUudHMiLCJuZzovL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliL2xpYi9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZzZCb290c3RyYXA0QXV0b21hdGVkRm9ybVZhbGlkYXRpb25MaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLW5nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZzZCb290c3RyYXA0QXV0b21hdGVkRm9ybVZhbGlkYXRpb25MaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZW5sRm9ybVZhbGlkYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KFwiZm9ybURhdGFcIikgZm9ybURhdGE6IE5nRm9ybTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZXF1aXJlZCkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJhZnRlcmVuZFwiLFxuICAgICAgICAnXFxuPGRpdiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj4qIFBsZWFzZSBFbnRlciBhICcgK1xuICAgICAgICBlbC5uYXRpdmVFbGVtZW50Lm5hbWUgK1xuICAgICAgICBcIi48L2Rpdj5cIlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldFwiXSlcbiAgb25Gb2N1c291dCh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlcXVpcmVkKSB7XG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnR5cGUgPT0gXCJudW1iZXJcIikge1xuICAgICAgaWYgKFxuICAgICAgICBOdW1iZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50Lm1pbiB8fCAtOTk5OTk5OTk5OTk5OTk5KSA+XG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5mb3JtLmNvbnRyb2xzW3RoaXMuZWwubmF0aXZlRWxlbWVudC5uYW1lXS5zZXRFcnJvcnMoeyBpbmNvcnJlY3Q6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIE51bWJlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubWF4IHx8IDk5OTk5OTk5OTk5OTk5OSkgPFxuICAgICAgICBOdW1iZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZm9ybURhdGEuZm9ybS5jb250cm9sc1t0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubmFtZV0uc2V0RXJyb3JzKHsgaW5jb3JyZWN0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWludmFsaWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmc2Qm9vdHN0cmFwNEF1dG9tYXRlZEZvcm1WYWxpZGF0aW9uTGliQ29tcG9uZW50IH0gZnJvbSAnLi9uZzYtYm9vdHN0cmFwNC1hdXRvbWF0ZWQtZm9ybS12YWxpZGF0aW9uLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tdmFsaWRhdGlvbi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nNkJvb3RzdHJhcDRBdXRvbWF0ZWRGb3JtVmFsaWRhdGlvbkxpYkNvbXBvbmVudCwgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmc2Qm9vdHN0cmFwNEF1dG9tYXRlZEZvcm1WYWxpZGF0aW9uTGliQ29tcG9uZW50LEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZzZCb290c3RyYXA0QXV0b21hdGVkRm9ybVZhbGlkYXRpb25MaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2REFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsbUVBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtEQUFrRDt3QkFDNUQsUUFBUSxFQUFFLG9GQUlUO3FCQUVGOzs7OytEQVZEOzs7Ozs7O0FDQUE7UUFVRSxpQ0FBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7WUFDaEMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFR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