import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Zone, ZoneList } from '../../models';
import { Apollo, gql } from "apollo-angular";

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

  public readonly LIST_QUERY = gql`
    query {
      zones {
        id, name, createdAt
      }
    }
  `;

  constructor(private apollo: Apollo) {
    let source = this.getZoneList();

    this.dataSource$ = source.pipe(map(res => {
      return res.data.zones;
    }));
  }

  ngOnInit(): void {
  }

  getZoneList() {
    return this.apollo.watchQuery<ZoneList>({
      query: this.LIST_QUERY
    }).valueChanges;
  }

}
