import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

  displayedColumns: string[] = [
    'recordType',
    'name',
    'contents',
    'ttl',
    'createdAt'
  ]
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  dataSource: Record[] = [
    {
      id: 1,
      zone: 'data.dev',
      name: '@',
      content: {
        ip: "192.168.0.1"
      },
      ttl: 300,
      recordType: 'A',
      createdAt: new Date()
    },
    {
      id: 1,
      zone: 'data.dev',
      name: 'mail',
      content: {
        host: "192.168.0.1",
        priority: 100
      },
      ttl: 3600,
      recordType: 'MX',
      createdAt: new Date()
    },
    {
      id: 1,
      zone: 'data.dev',
      name: 'site',
      content: {
        host: "canonical.host.name"
      },
      ttl: 3600,
      recordType: 'CNAME',
      createdAt: new Date()
    }
  ];

  expandedElement: Record | null = null;

  constructor() { }
}
