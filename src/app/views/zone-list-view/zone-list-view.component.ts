import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Zone } from '../../models';

@Component({
  selector: 'app-zone-list-view',
  templateUrl: './zone-list-view.component.html',
  styleUrls: ['./zone-list-view.component.scss']
})
export class ZoneListViewComponent {

  constructor(private router: Router) { }

  async navigate($event: Zone) {
    await this.router.navigate(['/zone', $event.id], {
      state: $event
    });
  }
}
