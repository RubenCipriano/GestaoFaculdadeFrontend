import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DialogService {
  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
}
