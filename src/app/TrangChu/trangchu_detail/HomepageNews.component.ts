/**
 * Created by haitr on 3/5/2017.
 */
import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Tintuc} from "../../Models/Models";
import {Method} from "../../Services/Method";
@Component({
  moduleId: module.id,
  selector: 'news',
  templateUrl: 'HomepageNews.UI.html',
  styleUrls: ['HomepageNews.style.css']
})
export class HomepageDetailComponent {
  @Input() tintuc: Tintuc;
  titles: string;

  constructor(private router: Router,
              private method: Method) {
  }

  ngOnInit() {

  }

  Nav(): void {
    this.titles = this.method.RemoveSyntax(this.tintuc._source.title);
    this.router.navigateByUrl('noidung/' + this.tintuc._source.link + '/' + this.tintuc._source.id + '/' + this.titles);
  }
}
