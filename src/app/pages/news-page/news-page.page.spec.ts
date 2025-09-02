import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsPagePage } from './news-page.page';

describe('NewsPagePage', () => {
  let component: NewsPagePage;
  let fixture: ComponentFixture<NewsPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
