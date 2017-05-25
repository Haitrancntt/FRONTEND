/**
 * Created by haitr on 3/28/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {CauHoi} from "../../Models/Models";
import {Services} from "../../Services/Config.services";
import {Method} from "../../Services/Method";

declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'trang-hoidap',
  templateUrl: 'TrangHoiDap.UI.html',
  styleUrls: ['TrangHoiDap.style.css', 'bootstrap.min.css', '../Circle/animated.css']
})
export class TrangHoiDapComponent implements OnInit,OnDestroy {
  private sub: any;
  cauhoi: CauHoi[];
  cautraloi: CauHoi;
  time: any;
  name: "";
  email: "";
  content: "";

  constructor(private cauhoiService: Services,
              private method: Method) {
    this.time = new Date;
  }

  ngAfterViewInit() {
    $('.toggle').click(function () {
      if (!$(this).next().hasClass('in')) {
        $(this).parent().children('.collapse.in').collapse('hide');
      }
      $(this).next().collapse('toggle');
    });

    $('#circle').click(function () {
      $('#faq_form').css("display", "block");
    });

    $('.cancel').click(function () {
      $('#faq_form').css("display", "none");
      $('.default').value = "";
    });
  }

  ngOnInit() {
    this.GetCauTraLoi();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  CreateQuestion(): void {
    if (this.content == null || this.name == null || this.email == null || this.content == '' || this.name == '' || this.email == '') {
      alert("Vui long dien du thong tin");
    }
    else {
      if (this.method.validateEmail(this.email)) {
        this.cauhoiService.CreateCauhoi(this.content, this.name, this.time, this.email)
          .subscribe(data=> {
              this.cauhoi = data;
              console.log(this.time);
              alert("Dat cau hoi thanh cong");
              this.name = "";
              this.content = "";
              this.email = "";
            },
            err=> {
              alert(err);
            }
          );
      }
    }
  }

  GetCauTraLoi(): void {
    this.sub = this.cauhoiService.GetCauTraLoi()
      .subscribe(data => {
        this.cautraloi = data;
      }, err => {
        alert(err);
      })
  }

  DelCauHoi(): void {
    this.name = "";
    this.content = "";
    this.email = "";
  }
}
