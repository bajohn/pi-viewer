import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ViewStatefulComponent } from './d3-view-stateful.component';

describe('D3ViewStatefulComponent', () => {
  let component: D3ViewStatefulComponent;
  let fixture: ComponentFixture<D3ViewStatefulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ViewStatefulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ViewStatefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
