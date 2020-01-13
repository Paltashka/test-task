import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  @Output() isAdding = new EventEmitter<boolean>();
  @Output() form = new EventEmitter();

  constructor() { }

  cancel() {
    this.isAdding.emit(false)
  }

  getNewItem(form: NgForm) {
    this.form.emit(form.value)
  }
}
