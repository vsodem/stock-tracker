import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialog {
  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }
}
