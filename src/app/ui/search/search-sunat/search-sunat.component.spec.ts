import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSunatComponent } from './search-sunat.component';

describe('SearchSunatComponent', () => {
  let component: SearchSunatComponent;
  let fixture: ComponentFixture<SearchSunatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSunatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSunatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
