import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { filter, map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';


// TODO: Replace this with your own data model type
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

/**
 * Data source for the Order view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrderDataSource extends DataSource<OrderItem> {
  data: OrderItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor(
    // private actRt: ActivatedRoute
  ) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OrderItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OrderItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: OrderItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
