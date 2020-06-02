import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterTaskComponent } from './search-filter-task.component';

describe('SearchFilterTaskComponent', () => {
  let component: SearchFilterTaskComponent;
  let fixture: ComponentFixture<SearchFilterTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
