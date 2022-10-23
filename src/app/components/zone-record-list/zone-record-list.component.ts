import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Observable, of } from 'rxjs';
import { Record } from '../../models';

@Component({
  selector: 'app-zone-record-list',
  templateUrl: './zone-record-list.component.html',
  styleUrls: ['./zone-record-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ZoneRecordListComponent {

  @Input()
  list$: Observable<Record[]> = of([]);

  displayedColumns: string[] = [
    'recordType',
    'name',
    'contents',
    'ttl',
    'createdAt'
  ]
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  expandedElement: Record | null = null;

  constructor() {}
}
