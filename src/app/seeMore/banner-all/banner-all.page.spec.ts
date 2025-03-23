import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerAllPage } from './banner-all.page';

describe('BannerAllPage', () => {
  let component: BannerAllPage;
  let fixture: ComponentFixture<BannerAllPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
