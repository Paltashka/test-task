import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ROOT_API } from 'API_CONFIG';
import { Table, TableItem } from '../interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Table> {
    return this.http.get<Table>(ROOT_API)
  }

  addNewData(data: TableItem):Observable<TableItem> {
   return this.http.post<TableItem>(ROOT_API, data)
  }

  deleteRow(id): Observable<any> {
    return this.http.delete(`${ROOT_API}/${id}`)
  }

  updateRow(data: TableItem): Observable<any> {
    return this.http.put(`${ROOT_API}/${data._id}`, data)
  } 
}
