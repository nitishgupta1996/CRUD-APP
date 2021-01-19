import { PipeTransform, Pipe } from '@angular/core';
import { TableModel } from './table.model';

@Pipe({
  name: 'filterTable'
})

export class DataFilterPipe implements PipeTransform {
  transform(tables: TableModel[], searchTerm: string): TableModel[] {
    if (!tables || !searchTerm) { // return tables if there is not a table or search string
      return tables;
    } else {                      // else return filter data if index is not empty
      return tables.filter(data =>
        data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        || data.age.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        || data.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        || data.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }
}

