import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTournoiComponent } from './afficher-tournoi.component';

describe('AfficherTournoiComponent', () => {
  let component: AfficherTournoiComponent;
  let fixture: ComponentFixture<AfficherTournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherTournoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherTournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
