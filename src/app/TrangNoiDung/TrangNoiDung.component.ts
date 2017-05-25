/**
 * Created by haitr on 3/17/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Tintuc} from "../Models/Models";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Services} from "../Services/Config.services";
import {Method} from "../Services/Method";
declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'trang-noidung',
  templateUrl: 'TrangNoiDung.UI.html',
  styleUrls: ['TrangNoiDung.style.css']
})
export class TrangNoiDungComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  tintuc: Tintuc;
  news: Tintuc[];
  array: any;

  constructor(private activatedRoute: ActivatedRoute,
              public tintucServices: Services,
              public router: Router,
              private method: Method) {
  }

  ngAfterViewInit() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $("#home").display = 'block';
      }
    });

  }

  ngOnInit() {
    this.getNewsById();
    this.getNewsRelate();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getNewsById(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let id = param['id'];
        console.log(id);
        this.tintucServices.GetNewsById(id)
          .subscribe(
            dulieu=> {
              this.tintuc = dulieu;
              this.array = [this.tintuc._source];
            },
            err=>alert(err)
          );
      })
  };

  getNewsRelate(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let id = param['id'];
        let cate = param['route'];
        //  console.log(id);
        this.tintucServices.GetNewsRelate(id, cate)
          .subscribe(
            dulieu=> {
              this.news = dulieu;
              //       console.log(this.news);
            },
            err=>alert(err)
          );
      })
  };

  Nav(id: any, title: string): void {
    title = this.method.RemoveSyntax(title);
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let cate = param['route'];
        this.router.navigateByUrl('noidung/' + cate + '/' + id + '/' + title);
        $('html,body').animate({
            scrollTop: $("#content").offset().top
          },
          'slow');
      }
    )
  }
}
