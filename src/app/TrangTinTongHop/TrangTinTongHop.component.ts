/**
 * Created by haitr on 3/17/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Services} from "../Services/Config.services";
import {Tintuc} from "../Models/Models";
import {Danhmuc} from "../Models/Models";
import {Method} from "../Services/Method";

@Component({
  moduleId: module.id,
  selector: 'trang-chitiet',
  templateUrl: 'TrangTinTongHop.UI.html',
  styleUrls: ['TrangTinTongHop.style.css']
})
export class TrangTinTongHopComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  tintuc: Tintuc;
  danhmuc: Danhmuc;
  array: any;

  constructor(private activatedRoute: ActivatedRoute,
              private tintucServices: Services,
              private danhmucServices: Services,
              private  router: Router,
              private method: Method) {
  }

  ngOnInit() {
    this.getNewsByCategory();
    this.getCategory();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getNewsByCategory(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let cate = param['category'];
        this.tintucServices.GetNewsByCategory(cate)
          .subscribe(
            dulieu=> {
              this.tintuc = dulieu;
              this.array = [this.tintuc._source];
            },
            err=>alert(err)
          );
      })
  };

  getCategory(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let category = param['category'];
        this.danhmucServices.GetCategoryByLink(category)
          .subscribe(
            dulieu=> {
              this.danhmuc = dulieu;
            },
            err=>alert(err)
          );
      }
    )
  }

  Nav(id: any, title: string): void {
    title = this.method.RemoveSyntax(title);
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let cate = param['category'];
        this.router.navigateByUrl('noidung/' + cate + '/' + id + '/' + title);
      }
    )
  }
}
