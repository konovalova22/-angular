import { IFilm } from './../type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() public post: IFilm | null = null;

  public isLiked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClickFavoriteButton(): void {
    this.isLiked = !this.isLiked;
  }
}
