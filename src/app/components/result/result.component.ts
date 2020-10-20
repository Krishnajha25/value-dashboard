import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { OrderDataSource, OrderItem } from '../order/order-datasource';
import * as XLSX from 'xlsx';


export interface OrderItem {
  id: number;
  secondaryRef: string;
  name: string;
  location: string;
  status: string;
  sitescomplete: string;
  estimated: string;
  fulfilled: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: OrderItem[] = [
  {
        id: 1,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 2,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'On Track',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 3,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 4,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 5,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'On Track',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 6,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Fulfilled',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: 'Yes'
      },
      {
        id: 7,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 8,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jun 19',
        fulfilled: '-'
      },
      {
        id: 9,
        secondaryRef: 'NCP-0095611',
        name: 'Multiple producsts',
        location: 'ABCD...',
        status: 'Delayed',
        sitescomplete: '0 of 1',
        estimated: '19 Jul 20',
        fulfilled: '-'
      },
      {
        id: 10,
        secondaryRef: 'NCP-1238123',
        name: 'Business Ethernet',
        location: 'NSW',
        status: 'Fulfilled',
        sitescomplete: '1 of 1',
        estimated: '',
        fulfilled: 'Yes'
      }
];


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements AfterViewInit, OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<OrderItem>;
  // dataSource: OrderDataSource

  fileName = 'Result.xlsx'
  paraName: String

  displayedColumns = ['id', 'secondaryRef', 'name', 'location', 'status', 'sitescomplete', 'estimated', 'fulfilled'];
  dataSource = new MatTableDataSource(EXAMPLE_DATA)

  constructor(
    private actRt: ActivatedRoute
    
  ) { 
    this.paraName = this.actRt.snapshot.queryParamMap.get('linkName')
  }

  ngOnInit(): void {
    console.log(this.paraName)
    // this.dataSource = new OrderDataSource()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  exportExcel(){
    let data = document.getElementById('resultTable')
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

    XLSX.writeFile(wb, this.fileName)
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
