import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';


import { ZoneListComponent } from './zone-list.component';
import { MaterialsModule } from "../../materials/materials.module";

describe('ZoneListComponent', () => {
  let component: ZoneListComponent;
  let fixture: ComponentFixture<ZoneListComponent>;

  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialsModule,
        ApolloTestingModule
      ],
      declarations: [ ZoneListComponent ]
    })
    .compileComponents();

    controller = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(ZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    controller.verify();
  });

  it('loads list of zones', () => {

    const op = controller.expectOne(component.LIST_QUERY);

    component.getZoneList().subscribe(response => {
      expect(response).toBeTruthy();
    });
  });
});
