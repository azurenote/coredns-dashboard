import { Component } from '@angular/core';
import { Record } from '../../models';

@Component({
  selector: 'app-zone-record-list',
  templateUrl: './zone-record-list.component.html',
  styleUrls: ['./zone-record-list.component.scss']
})
export class ZoneRecordListComponent {

  displayedColumns: string[] = [
    'recordType',
    'name',
    'contents',
    'ttl',
    'createdAt'
  ]

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
    }
  ];

  constructor() { }
}
