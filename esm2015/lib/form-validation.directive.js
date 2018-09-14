/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
export class FormValidationDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    onFocusout(target) {
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
    }
}
FormValidationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[enlFormValidation]'
            },] }
];
/** @nocollapse */
FormValidationDirective.ctorParameters = () => [
    { type: ElementRef }
];
FormValidationDirective.propDecorators = {
    formData: [{ type: Input, args: ["formData",] }],
    onFocusout: [{ type: HostListener, args: ["input", ["$event.target"],] }]
};
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formData;
    /** @type {?} */
    FormValidationDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nNi1ib290c3RyYXA0LWF1dG9tYXRlZC1mb3JtLXZhbGlkYXRpb24tbGliLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tdmFsaWRhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3hDLE1BQU07Ozs7SUFJSixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNoQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDdEMsVUFBVSxFQUNWLG1EQUFtRDtnQkFDbkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJO2dCQUNyQixTQUFTLENBQ1YsQ0FBQztTQUNIO0tBQ0Y7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQU07UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzFDLElBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUNuQztnQkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7aUJBQU0sSUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUNuQztnQkFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7U0FDRjtLQUNGOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7WUFMbUIsVUFBVTs7O3VCQVEzQixLQUFLLFNBQUMsVUFBVTt5QkFhaEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VubEZvcm1WYWxpZGF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUge1xuXG4gIEBJbnB1dChcImZvcm1EYXRhXCIpIGZvcm1EYXRhOiBOZ0Zvcm07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYWZ0ZXJlbmRcIixcbiAgICAgICAgJ1xcbjxkaXYgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+KiBQbGVhc2UgRW50ZXIgYSAnICtcbiAgICAgICAgZWwubmF0aXZlRWxlbWVudC5uYW1lICtcbiAgICAgICAgXCIuPC9kaXY+XCJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihcImlucHV0XCIsIFtcIiRldmVudC50YXJnZXRcIl0pXG4gIG9uRm9jdXNvdXQodGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZXF1aXJlZCkge1xuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlID09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC5taW4gfHwgLTk5OTk5OTk5OTk5OTk5OSkgPlxuICAgICAgICBOdW1iZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZm9ybURhdGEuZm9ybS5jb250cm9sc1t0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubmFtZV0uc2V0RXJyb3JzKHsgaW5jb3JyZWN0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLWludmFsaWRcIik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBOdW1iZXIodGhpcy5lbC5uYXRpdmVFbGVtZW50Lm1heCB8fCA5OTk5OTk5OTk5OTk5OTkpIDxcbiAgICAgICAgTnVtYmVyKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhLmZvcm0uY29udHJvbHNbdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5hbWVdLnNldEVycm9ycyh7IGluY29ycmVjdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1pbnZhbGlkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19