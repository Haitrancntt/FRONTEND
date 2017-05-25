/**
 * Created by haitr on 3/16/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Services} from "../../Services/Config.services";
import {Banners} from "../../Models/Models";
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'banner-main',
  templateUrl: 'HomepageBannerMain.UI.html',
  styleUrls: ['HomepageBannerMain.style.css']
})
export class HomepageBannerMainComponent implements OnInit,OnDestroy {
  private sub: any;
  banner: Banners[];

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  constructor(private bannerService: Services) {
  }

  ngOnInit() {
    this.getBanner();
  }

  getBanner(): void {
    this.sub = this.bannerService.GetImage()
      .subscribe(data => {
        this.banner = data;
      }, err=> {
        alert(err);
      })
  }

  ngAfterViewChecked() {
    $('.regular').not('.slick-initialized').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
    });
  }
}

