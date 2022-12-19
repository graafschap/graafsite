import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagensComponent } from './wagens.component';

describe('WagensComponent', () => {
  let component: WagensComponent;
  let fixture: ComponentFixture<WagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
