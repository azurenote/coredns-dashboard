import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogContext } from './confirm-dialog-context';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogContext
  ) { }

  ngOnInit(): void {
    console.log('test');
  }

  get title(): string {
    return this.data?.title ?? 'components.default.confirm-dialog.title';
  }

  get message(): string {
    return this.data?.message ?? 'components.default.confirm-dialog.message';
  }

  onClickOkay($event: MouseEvent) {
    this.dialogRef.close(true);
  }

  onClickCancel($event: MouseEvent) {
    this.dialogRef.close(false);
  }
}
