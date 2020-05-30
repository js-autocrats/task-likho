import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListTileComponent } from './check-list-tile.component';

describe('CheckListTileComponent', () => {
  let component: CheckListTileComponent;
  let fixture: ComponentFixture<CheckListTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
