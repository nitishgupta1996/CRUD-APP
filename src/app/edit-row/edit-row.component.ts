import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableModel } from '../table.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {
  @Input() editData: TableModel;                    // used to bind edit data of this component to create component
  @Output() saveEdit = new EventEmitter<object>();
  @Output() cancelEdit = new EventEmitter<object>();

  editableData: TableModel; // contains table data

  constructor() { }

  ngOnInit() {
    this.editableData = _.cloneDeep(this.editData); // using cloneDeep method from lodash js library to create copy of objects
  }

  // to save edited data
  onSave() {
    this.saveEdit.emit(this.editableData);
  }

  // to cancel the edit form
  onCancelEdit() {
    this.cancelEdit.emit();
  }
}
