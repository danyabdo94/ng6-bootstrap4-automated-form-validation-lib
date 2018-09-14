# what is it 
## please make sure that this only works for anngular 4+ and bootstrap 4 also
It easy to use automatic form validation for input ..
You just need to import module
import { Ng6Bootstrap4AutomatedFormValidationLibModule } from "ng6-bootstrap4-automated-form-validation-lib"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6Bootstrap4AutomatedFormValidationLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

and then you only need to 
* give the form name .. 
> <form #f="ngForm" (ngSubmit)="save()" name="addFacForm" class="needs-validation">
* add the validation u need to input field and also add the directive name then see the magic .. 

> <input type="text" enlFormValidation [formData]="f" class="form-control" name="name"  required>


# Ng6Bootstrap4AutomatedFormValidationApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
