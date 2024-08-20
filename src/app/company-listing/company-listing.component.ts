import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community';
import { SAMPLE_DATA } from '../data';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '@ngneat/dialog';
import { HelloWorldComponent } from './add-modal.component';
import { CompanyListingService } from './company-listing.service';

@Component({
  selector: 'app-company-listing',
  standalone: true,
  imports: [AgGridAngular, MatButtonModule, MatIconModule],
  templateUrl: './company-listing.component.html',
  styleUrl: './company-listing.component.scss',
})
export class CompanyListingComponent {
  rowData = SAMPLE_DATA;
  private dialog = inject(DialogService);

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'name', filter: true },
    { field: 'exchange', filter: true },
    { field: 'ticker', filter: true },
    { field: 'isin', filter: true },
    { field: 'website' },
  ];

  constructor(private companyListingService: CompanyListingService) {}

  ngOnInit() {}

  onAddButtonClick() {
    const dialogRef = this.dialog.open(HelloWorldComponent, {
      data: {
        title: '',
      },
    });
  }
}
