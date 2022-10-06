import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class AuthModule { }
