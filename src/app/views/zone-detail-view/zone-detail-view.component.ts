import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';
import { Record } from '../../models';


type Response = { zone: {name: string}, records: Record[] };

@Component({
  selector: 'app-zone-detail-view',
  templateUrl: './zone-detail-view.component.html',
  styleUrls: ['./zone-detail-view.component.scss']
})
export class ZoneDetailViewComponent implements OnInit {

  public activeZoneId$: Observable<number>;
  public list$: Observable<Record[]> = of([]);
  public zone$: Observable<string> = of('');

  public readonly QUERY = gql`query getRecords($zoneId: Int!) {
    zone(zoneId: $zoneId) {
      name
    }
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
  }`;

  constructor(
    private activeRoute: ActivatedRoute,
    private graphql: Apollo
  ) {
    this.activeZoneId$ = activeRoute.params.pipe(
      map(params => parseInt(params['id']))
    );
  }

  ngOnInit(): void {

    const source$ = this.activeZoneId$.pipe(
      switchMap(id => {
        console.log('zone.id', id);
        return this.graphql.watchQuery<Response>({
          query: this.QUERY,
          variables: {
            zoneId: id
          }
        }).valueChanges.pipe(
          map(res => res.data)
        )
      })
    );


    this.zone$ = source$.pipe(map(data => data.zone.name));
    this.list$ = source$.pipe(map(data => data.records));
  }

}
