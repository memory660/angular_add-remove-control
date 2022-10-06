import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    type: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });
  denominationForm: FormGroup = new FormGroup({
    denomination: new FormControl('', Validators.required),
  })

  submitted = false;

  constructor(
  ) {}

  ngOnInit(): void {
    this.registerForm.controls['type'].valueChanges.subscribe( (value) => {

      if (value == 'professionel') {
        this.addDenomination();
      } else {
        this.removeDenomination();
      }
    });
    //
    this.registerForm.get('type')?.setValue('particulier');
  }

  get f() {
    return this.registerForm?.controls;
  }

  get fd() {
    return this.denominationForm?.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm?.invalid) {
      return;
    }
  }

  addDenomination(): void {
    if (!this.hasDenomination) {
      this.registerForm.addControl('denominationForm', this.denominationForm);
    }
  }

  removeDenomination() {
    if (!this.hasDenomination) {
      this.registerForm.removeControl('denominationForm');
    }
  }

  ngOnDestroy(): void {
  }

  get hasDenomination(): boolean {
    return this.registerForm.contains('denominationForm');
  }

  get isProfessionnel(): boolean {
    return this.registerForm?.get('type')?.value === 'professionnel';
  }
}
