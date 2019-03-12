import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PconexionComponent } from './pconexion.component';

describe('PconexionComponent', () => {
  let component: PconexionComponent;
  let fixture: ComponentFixture<PconexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PconexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PconexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
