// user-tabel.component.ts

import { Component, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-user-tabel',
  templateUrl: './user-tabel.component.html',
  styleUrls: ['./user-tabel.component.scss']
})
export class UserTabelComponent implements AfterViewInit {
  @Input() userData: UserData[] = [];

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // Define the number of rows to display options
  rowsOptions: number[] = [7, 14, 21];
  selectedRows: number = this.rowsOptions[0];


constructor(private cdr: ChangeDetectorRef) {

  
}
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.userData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // Manually trigger change detection
    this.cdr.detectChanges();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowsSelectionChange() {
    this.dataSource.paginator!.pageSize = this.selectedRows;
    this.dataSource.paginator!.pageIndex = 0; // Reset to the first page
  }
}
