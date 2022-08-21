import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';
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
export class ZoneRecordListComponent implements OnInit {

  @Input()
  zoneId$: Observable<number> = of(0);


  displayedColumns: string[] = [
    'recordType',
    'name',
    'contents',
    'ttl',
    'createdAt'
  ]
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  expandedElement: Record | null = null;

  public dataSource$: Observable<Record[]> = of([]);

  constructor(private graphql: Apollo) {

  }

  ngOnInit() {

    this.dataSource$ = this.zoneId$.pipe(
      switchMap(id => {
        console.log('zone.id', id);
        return this.graphql.watchQuery<{ records: Record[] }>({
          query: gql` query getRecords($zoneId: Int!) {
            records(zoneId: $zoneId) {
              id, name, zone, ttl,
              createdAt,
              recordType, content {
                ... on RecordA {
                  ip
                }
                ... on RecordMX {
                  host, priority
                }
              }
            }
          }`,
          variables: {
            zoneId: id
          }
        }).valueChanges.pipe(
          map(res => {
            return res.data.records
          })
        )
      })
    );
  }
}
