/**
 * Created by haitr on 2/28/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Services} from "../../Services/Config.services";

import {Tintuc} from "../../Models/Models";

@Component({
  moduleId: module.id,
  templateUrl: 'Homepage.UI.html',
  styleUrls: ['Homepage.style.css']

})
export class HomepageComponent implements OnInit,OnDestroy {
  tintucs: Tintuc[];
  private sub: any;

  constructor(private newsService: Services) {
  }

  ngOnInit() {
    this.getNews();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /*Get News*/
  getNews(): void {
    this.sub = this.newsService.GetNews()
      .subscribe(
        dulieu => {
          this.tintucs = dulieu
        },
        err => alert(err)
      );
  }

}
