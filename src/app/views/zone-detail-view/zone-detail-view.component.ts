import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zone-detail-view',
  templateUrl: './zone-detail-view.component.html',
  styleUrls: ['./zone-detail-view.component.scss']
})
export class ZoneDetailViewComponent implements OnInit {

  public activeZoneId$: Observable<number>;

  constructor(
    private activeRoute: ActivatedRoute
  ) {
    this.activeZoneId$ = activeRoute.params.pipe(
      map(params => parseInt(params['id']))
    );
  }

  ngOnInit(): void {
  }

}
