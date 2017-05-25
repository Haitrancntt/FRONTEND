/**
 * Created by haitr on 3/9/2017.
 */
import {Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'banner-right',
  templateUrl: 'HomepageBannerRight.UI.html',
  styleUrls: ['HomepageBannerRight.style.css']
})
export class HomepageBannerRightComponent implements OnInit {
  constructor() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".center").slack({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true
      });
    });
  }

  ngOnInit() {
  }


}
