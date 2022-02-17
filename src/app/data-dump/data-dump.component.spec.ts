import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDumpComponent } from './data-dump.component';

describe('DataDumpComponent', () => {
  let component: DataDumpComponent;
  let fixture: ComponentFixture<DataDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
