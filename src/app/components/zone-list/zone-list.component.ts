import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Zone } from '../../models';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss']
})
export class ZoneListComponent implements OnInit {

  @Output()
  public zoneSelected = new EventEmitter<Zone>();


  displayedColumns: string[] = ['name', 'createdAt']
  dataSource: Zone[] = [
    {
      id: 1,
      name: 'data.dev',
      createdAt: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
