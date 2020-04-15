import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input()
  blogCardViews: Array<blogCardView> = new Array<blogCardView>();

  ngOnInit(): void {
  }

}

export class blogCardView {
  constructor(
    public title = 'Title',
    public subTitle = 'Subtitle',
    public content = 'Content',
    public imageUrl = 'assets/image/profile-pic.jpg',
    public tags = ['tag1', 'tag2', 'tag3'],
    public date = 'In a galaxy far far away...',
    public author = 'Bobba Fett',
    public readMore = 'https://google.com',  
    public liveExample = ''
    ){}
}