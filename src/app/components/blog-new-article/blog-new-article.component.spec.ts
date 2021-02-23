import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewArticleComponent } from './blog-new-article.component';

describe('BlogNewArticleComponent', () => {
  let component: BlogNewArticleComponent;
  let fixture: ComponentFixture<BlogNewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNewArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
