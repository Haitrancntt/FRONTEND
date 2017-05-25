import {Injectable, Component, OnInit, Input, OnDestroy} from '@angular/core';
import 'rxjs/add/operator/map';
import {Danhmuc} from "../Models/Models";
import {Router} from "@angular/router";
import {Services} from "../Services/Config.services";
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.UI.html',
  styleUrls: ['app.style.css', 'bootstrap.min.css'],
})
@Injectable()
export class AppComponent implements OnInit,OnDestroy {
  @Input() danhmuc: Danhmuc;
  private sub: any;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  constructor(private router: Router,
              private danhmucService: Services) {
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    this.sub = this.danhmucService.GetCategory()
      .subscribe(
        dulieu => {
          this.danhmuc = dulieu;
          console.log(this.danhmuc);
        },
        err => alert(err)
      );
  }

  Navigation(link: string): void {
    this.router.navigateByUrl('tintuc/' + link);
  }

}
