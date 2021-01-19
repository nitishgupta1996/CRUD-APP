import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { DataFilterPipe } from './filter-table.pipe';
import { AddRowComponent } from './add-row/add-row.component';
import { EditRowComponent } from './edit-row/edit-row.component';
import { SortPipe } from './sort-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateTableComponent,
    DataFilterPipe,
    AddRowComponent,
    EditRowComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
