import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesMundoComponent } from './cafes-mundo.component';

describe('CafesMundoComponent', () => {
  let component: CafesMundoComponent;
  let fixture: ComponentFixture<CafesMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafesMundoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafesMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
