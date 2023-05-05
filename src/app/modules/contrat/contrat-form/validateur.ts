// import {FormControl, ValidationErrors} from '@angular/forms';
//
// export function lessThan(control1: FormControl, control2: FormControl): ValidationErrors | null {
//   if (new Date(control1.value) > (new Date(control2.value)))
//     return {LessThan: true};
//
//   return null;
// }
// ---------------------------------
// import {FormGroup} from '@angular/forms';
//
// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//
//     if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
//       // return if another validator has already found an error on the matchingControl
//       return;
//     }
//
//     // set error on matchingControl if validation fails
//     if (control.value < matchingControl.value) {
//       matchingControl.setErrors({mustMatch: true});
//     } else {
//       matchingControl.setErrors(null);
//     }
//   }
// }
//-------------------


import {AbstractControl, ValidationErrors} from "@angular/forms";

export function LowerThan(control: AbstractControl): ValidationErrors | null {
  const debut = control.get('dateDebutContrat');
  const fin = control.get('dateFinContrat');
  if (new Date(debut?.value) > (new Date(fin?.value)))
    return {LowerThan: true};
  return null;
}

