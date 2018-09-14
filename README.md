# what is it 
* please make sure that this only works for anngular 4+ and bootstrap 4 only
It easy to use automatic form validation for input ..
You just need to import module
``` 
import { Ng6Bootstrap4AutomatedFormValidationLibModule } from "ng6-bootstrap4-automated-form-validation-lib"

  imports: [
    BrowserModule,
    Ng6Bootstrap4AutomatedFormValidationLibModule],

```

and then you only need to 
* give the form name and the reference .. 
```
<form #f="ngForm" (ngSubmit)="save()" name="addForm" class="needs-validation">
```
* add the validation you need to input field and also add the directive name then see the magic .. 
```
<input type="text" enlFormValidation [formData]="f" class="form-control" name="name"  required>
```

# Why to use this package 
* No extra validation attributes like [validate]="required" .. just the default html required , min and max will work successfully 

# Input Attributes

| Attribute        |  required     | 
| -------------    |:-------------:| 
| required         | optional      | 
| min              | optional      |  
| max              | optional      |   
| enlFormValidation| required      |   
| [formData]       | give the form refrence to make the form invalid      |   
