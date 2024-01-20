import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentBplgsComponent } from './resent-bplgs.component';

describe('ResentBplgsComponent', () => {
  let component: ResentBplgsComponent;
  let fixture: ComponentFixture<ResentBplgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResentBplgsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResentBplgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
