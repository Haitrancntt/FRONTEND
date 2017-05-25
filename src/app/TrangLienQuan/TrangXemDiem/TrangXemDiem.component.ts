/**
 * Created by haitr on 4/17/2017.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Diemxettuyen} from "../../Models/Models";
import {Services} from "../../Services/Config.services";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'trang-xemdiem',
  templateUrl: 'TrangXemDiem.UI.html',
  styleUrls: ['TrangXemDiem.style.css', 'animated.css']
})
export class TrangXemDiemComponent implements OnInit {
  diemxt: Diemxettuyen;

  constructor(private diemxtservice: Services,
              private router: Router) {
  }

  ngOnInit() {
  }

  GetDiem(code: string): void {
    if (code == null || code == '') {
      alert("Vui long nhap sbd hoac so cmnd");
    }
    else {
      this.diemxtservice.GetDiem(code)
        .subscribe(
          data=> {
            if (data == null) {
              alert('So bao danh hoac cmnd khong ton tai')
            } else {
              console.log('adadad' + data);
              this.diemxt = data;
            }
          },
          err => {
            alert('Khong ton tai du lieu nguoi dung' + err);
          }
        );
    }
  }
  Hoidap(): void {
    this.router.navigateByUrl('hoidap');
  }
}
