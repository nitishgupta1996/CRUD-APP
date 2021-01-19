import { Pipe, PipeTransform } from '@angular/core';
import { TableModel } from './table.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(rows: TableModel[], column: string, reverse: boolean): TableModel[] {

    if (column === 'name') {

      rows.sort((el1, el2) => el1.name.localeCompare(el2.name)); // localeCompare() compares two strings in the current locale.

    } else if (column === 'age') {

      rows.sort((el1, el2) => el1.age - el2.age); // sort() method compares two values

    } else if (column === 'email') {

      rows.sort((el1, el2) => el1.email.localeCompare(el2.email));

    } else if (column === 'country') {

      rows.sort((el1, el2) => el1.country.localeCompare(el2.country));

    }
    // Reverse Array after sorting.
    if (reverse) {   // If flag is true then only reverse it.
      rows.reverse();
    }
    return rows;

  }
}
