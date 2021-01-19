import { Component, OnInit } from '@angular/core';
import { TableModel } from '../table.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  editData: TableModel; // property to consume TableModel properties while editing form

  searchTerm: string; // property to bind with ngModel to filter data
  headers: string[] = ['ID', 'Name', 'Age', 'Email', 'Country', 'Action']; // property to render columns in table

  isNewRow = false; // boolean to render add row
  isEdit = false; // boolean to edit a particular row

  sortColumn: string | number = 'name'; // property to sort table columns
  reverse: boolean; // to sort column in reverse order

  editindex: number; // to hold index of an edited row

  // Json to show data inside table
  rows: TableModel[] = [
    {
      name: 'John',
      age: 28,
      email: 'john123@gmail.com',
      country: 'France',
    },
    {
      name: 'Mary',
      age: 32,
      email: 'mary987@yahoo.com',
      country: 'Italy'
    },
    {
      name: 'Adam',
      age: 38,
      email: 'adam567@hotmail.com',
      country: 'Germany'
    },
    {
      name: 'Wanda',
      age: 40,
      email: 'wanda390@gmail.com',
      country: 'Australia'
    },
    {
      name: 'Tom',
      age: 18,
      email: 'tom007@yahoo.com',
      country: 'England'
    },
    {
      name: 'Rose',
      age: 50,
      email: 'rose786@hotmail.com',
      country: 'Brazil'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Function to delete a single row index wise
  onDelete(index: number) {
    this.rows.splice(index, 1);
  }

  // Function to add new row in a table
  onAddSubmit(addedData: TableModel) {
    this.rows.push({
      name: addedData.name,
      age: addedData.age,
      email: addedData.email,
      country: addedData.country
    });
    this.isNewRow = false;
  }

  // Function to edit row of table
  onEdit(row: TableModel, index: number) {
    this.editData = _.cloneDeep(row);
    this.editindex = index;
    this.isEdit = true;
  }

  // Function to submit new data to update table
  onEditSubmit(data: TableModel) {
    this.rows[this.editindex] = data;
    this.isEdit = false;
  }
  // to cancel form
  onCancel() {
    this.isEdit = false;
    this.isNewRow = false;
  }

  // Function to sort columns in asc or desc order
  sortColumns(column: string) {
    if (this.sortColumn === column) {
      this.reverse = !this.reverse;  // set boolean true or false
    }
    this.sortColumn = column; // If we click on any column then it will assign that name to sortColumn.
  }

}
