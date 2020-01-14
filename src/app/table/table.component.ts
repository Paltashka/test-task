import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TableItem } from '../interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private apiService: ApiService) {
    
  }


  isAdding: boolean;
  tableItems: Array<TableItem>;

  ngOnInit() {
    this.getTableData()
  }

  openModal() {
    this.isAdding = true;
  }

  getTableData() {
    this.apiService.getData().subscribe(
      res => {
        this.tableItems = res.result;
      },
      err => {
         throw new Error();
      }
    )
  }

  edit(data) {
    console.log(data)
    this.apiService.updateRow(data).subscribe(
      res => {
        this.getTableData()
      },
      err => {
        throw new Error();
      }
    )
  }
  
  deleteRow(id: string) {
    id.toString()
    this.apiService.deleteRow(id).subscribe(
      res => {
        this.getTableData();
      },
      err => {
        throw new Error();
      }
    )
  }

  addNewData(form) {
    this.apiService.addNewData(form).subscribe(
      res => {
        this.getTableData()
      },
      err => {
        throw new Error();
      }
    );
  }

  cancel(event) {
    this.isAdding = event;
  }
}
