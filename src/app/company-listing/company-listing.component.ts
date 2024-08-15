import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { SAMPLE_DATA } from '../data';
@Component({
  selector: 'app-company-listing',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './company-listing.component.html',
  styleUrl: './company-listing.component.scss',
})
export class CompanyListingComponent {
  rowData = SAMPLE_DATA;

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'exchange' },
    { field: 'ticker' },
    { field: 'isin' },
    { field: 'website' },
  ];
}
