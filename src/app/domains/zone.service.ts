import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ZoneList, Zone } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private apollo: Apollo) { }

  getZoneList() {
    return this.apollo.watchQuery<ZoneList>({
      query: gql`
        query {
          zones {
            id, name, createdAt
          }
        }
      `
    }).valueChanges;
  }
}
