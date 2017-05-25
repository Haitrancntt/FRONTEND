/**
 * Created by haitr on 5/22/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Method} from "../../Services/Method";

@Component({
  moduleId: module.id,
  selector: 'circle',
  templateUrl: 'Circle.UI.html',
  styleUrls: ['animated.css']
})
export class CircleComponent implements OnInit {
  constructor(private router: Router,
              private method: Method) {
  }

  ngOnInit() {
  }

  /*Circle FAQ*/
  Hoidap(): void {
    this.router.navigateByUrl('hoidap');
  }

  Tracuu(): void {
    this.router.navigateByUrl('tracuudiemthi');
  }
}
