import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposCafeComponent } from './tipos-cafe.component';

describe('TiposCafeComponent', () => {
  let component: TiposCafeComponent;
  let fixture: ComponentFixture<TiposCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposCafeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
