import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesLayerComponent } from './planes-layer.component';

describe('PlanesLayerComponent', () => {
  let component: PlanesLayerComponent;
  let fixture: ComponentFixture<PlanesLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
