import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDialogModule
  ]
})
export class AppMaterialModule { }
