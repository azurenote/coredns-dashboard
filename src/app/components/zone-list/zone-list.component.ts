import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Zone } from '../../models';
import { ZoneService } from '../../domains/zone.service';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss']
})
export class ZoneListComponent implements OnInit {

  @Output()
  public zoneSelected = new EventEmitter<Zone>();

  dataSource$: Observable<Zone[]>;

  displayedColumns: string[] = ['name', 'createdAt'];

  constructor(private zone: ZoneService) {
    let source = this.zone.getZoneList();

    this.dataSource$ = source.pipe(map(res => {
      return res.data.zones;
    }));
  }

  ngOnInit(): void {
  }
}
