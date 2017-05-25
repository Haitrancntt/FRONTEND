/**
 * Created by haitr on 3/20/2017.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Services} from "../Services/Config.services";
import {Http} from "@angular/http";
import {Danhmuc} from "../Models/Models";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'menu-second',
  templateUrl: 'MenuTrangNoiDung.UI.html',
  styleUrls: ['MenuTrangNoiDung.style.css']
})
export class MenuTrangNoiDungComponent implements OnInit {
  danhmuc: Danhmuc[];

  constructor(private danhmucService: Services,
              private router: Router) {
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    this.danhmucService.GetCategory()
      .subscribe(
        dulieu => {
          this.danhmuc = dulieu
        },
        err => alert(err)
      );
  }

  Navigation(link: string): void {
    this.router.navigateByUrl('tintuc/' + link);
  }
}
