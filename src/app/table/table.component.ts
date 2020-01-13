import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }
  isAdding: boolean;
  testData = [
    {
      "firstname": 'Jonh',
      "lastname": 'Doe',
      "email": 'johnDoe@email.com'
    },
    {
      "firstname": 'Jonh1',
      "lastname": 'Doe1',
      "email": 'johnDoe1@email.com'
    },
    {
      "firstname": 'Jonh2',
      "lastname": 'Doe2',
      "email": 'johnDoe2@email.com'
    },
    {
      "firstname": 'Jonh3',
      "lastname": 'Doe4',
      "email": 'johnDoe3@email.com'
    }
  ]

  ngOnInit() {
  }

  openModal() {
    this.isAdding = true;
  }

  edit(firstName) {
    console.log(firstName)
  }

  getForm(form: NgForm) {
    console.log(form.value);
    this.isAdding = false;
  }
  
  cancel() {
    this.isAdding = false;
  }
}
