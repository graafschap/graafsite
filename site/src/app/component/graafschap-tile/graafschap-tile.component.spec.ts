import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraafschapTileComponent } from './graafschap-tile.component';

describe('GraafschapTileComponent', () => {
  let component: GraafschapTileComponent;
  let fixture: ComponentFixture<GraafschapTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraafschapTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraafschapTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
