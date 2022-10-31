import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Professor } from "src/models/professor";
import { DialogService } from "src/services/modal.service";
import { InputForm, InputType } from "./input-form";

@Component({
  selector: 'dialog-component',
  styleUrls: ['dialog.component.scss'],
  templateUrl: 'dialog.component.html'
})

export class DialogComponent implements OnInit {
  @Input() formInputs?: InputForm[] = [];
  @Input() method: string = "POST";
  @Input() editedObjectId?: number;

  @Output() eventEmitter = new EventEmitter<any>();

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private routerParams: Router, public dialogService: DialogService) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit() {
    let tempObject: any = {};
    this.formInputs?.forEach((value) => {
      tempObject[value.name] = value.value || ['']
    });
    this.formGroup = this.formBuilder.group(tempObject);
  }

  onSubmit() {
    if(this.formGroup.valid) {
      switch(this.method) {
        case "POST":
          this.http.post(`${environment.apiUrl}/${this.routerParams.url.substring(1)}`, this.formGroup.value).subscribe((response) => this.eventEmitter.emit(response))
          break;
        case "PUT":
          this.formInputs?.forEach((formInput) => {
            if(formInput.type == InputType.dropdown) this.formGroup.value[formInput.name] = formInput.value?.find((value: any) => value.id == this.formGroup.value[formInput.name]);
          })
          this.http.put(`${environment.apiUrl}/${this.routerParams.url.substring(1)}/${this.editedObjectId}`, this.formGroup.value).subscribe((response) => this.eventEmitter.emit(response))
          break;
      }
    }
  }

  stringifyObject(value: any) {
    return JSON.stringify(value);
  }
}
