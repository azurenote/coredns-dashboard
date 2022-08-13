import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coredns-dashboard';

  isOpen = false;
  constructor(
    public dialog: MatDialog
  ) {
  }

  confirmSignOut() {

    this.dialog.open(ConfirmDialogComponent, {});
  }
}
