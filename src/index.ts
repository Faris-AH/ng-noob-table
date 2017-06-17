import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SampleComponent } from "./sample.component";
import { SampleDirective } from "./sample.directive";
import { SamplePipe } from "./sample.pipe";
import { SampleService } from "./sample.service";

import { DataTable } from "./components/table/table.component";
import { DataTableColumn } from "./components/column/column.component";
import { DataTableRow } from "./components/row/row.component";
import { DataTablePagination } from "./components/pagination/pagination.component";
import { DataTableHeader } from "./components/header/header.component";

export * from "./components/types";
export * from "./tools/data-table-resource";

import { PixelConverter } from "./utils/px";
import { Hide } from "./utils/hide";
import { MinPipe } from "./utils/min";

export * from "./sample.component";
export * from "./sample.directive";
export * from "./sample.pipe";
export * from "./sample.service";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DataTable,
    DataTableColumn,
    DataTableRow,
    DataTablePagination,
    DataTableHeader,
    PixelConverter,
    Hide,
    MinPipe,
    SampleComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    DataTable,
    DataTableColumn,
    SampleComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class NgNoobTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgNoobTableModule,
      providers: [SampleService]
    };
  }
}
