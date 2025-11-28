import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBotComponent } from './research.bot.component';

describe('ResearchBotComponent', () => {
  let component: ResearchBotComponent;
  let fixture: ComponentFixture<ResearchBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
