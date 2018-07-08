import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  page: any;
  chapter: any;
  selectedPage: number;
  selectedChapter: number;
  pics: any;
  baseUrl = 'assets/img/commic/storyboard-';
  afterFix = '.png';
  constructor() {}

  ngOnInit() {
    const baseUrl = 'assets/img/commic/storyboard-';
    const afterFix = '.png';
    // 先塞假資料
    this.page = [
      { label: 'Page 1', value: 1 },
      { label: 'Page 2', value: 2 },
      { label: 'Page 3', value: 3 },
      { label: 'Page 4', value: 4 },
      { label: 'Page 5', value: 5 },
      { label: 'Page 6', value: 6 },
      { label: 'Page 7', value: 7 },
      { label: 'Page 8', value: 8 },
      { label: 'Page 9', value: 9 },
      { label: 'Page 10', value: 10 },
      { label: 'Page 11', value: 11 },
      { label: 'Page 12', value: 12 }
    ];
    this.chapter = [
      { label: 'Chapter 1', value: 1 },
      { label: 'Chapter 2', value: 2 }
    ];
    this.pics = [
      {
        page: 1
      },
      {
        page: 2
      },
      {
        page: 3
      },
      {
        page: 4
      },
      {
        page: 5
      },
      {
        page: 6
      },
      {
        page: 7
      },
      {
        page: 8
      },
      {
        page: 9
      },
      {
        page: 10
      },
      {
        page: 11
      },
      {
        page: 12
      }
    ];
    this.processPic();
  }
  changePage() {
    console.log('change page');
    console.log(this.selectedPage);
  }
  changeChapter() {
    console.log('change chapter');
    console.log(this.selectedChapter);
  }
  processPic() {
    this.pics.forEach(p => {
      p.page = this.baseUrl + p.page + this.afterFix;
    });
  }
}
