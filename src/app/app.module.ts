import {NgModule, enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './Masterpage/app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule, JsonpModule, XHRBackend} from "@angular/http";
import {HomepageComponent} from "./TrangChu/trangchu/Homepage.component";
import {HomepageDetailComponent} from "./TrangChu/trangchu_detail/HomepageNews.component";
import {HomepageBannerMainComponent} from "./TrangChu/trangchu_banner_chinh/HomepageBannerMain.component";
import {HomepageBannerRightComponent} from "./TrangChu/trangchu_banner_phai/HomepageBannerRight.component";
import {FooterComponent} from "./TrangChu/footer/Footer.component";
import {TrangTinTongHopComponent} from "./TrangTinTongHop/TrangTinTongHop.component";
import {TrangNoiDungComponent} from "./TrangNoiDung/TrangNoiDung.component";
import {MenuTrangNoiDungComponent} from "./MenuTrangNoiDung/MenuTrangNoiDung.component";
import {Ng2PaginationModule} from "ng2-pagination";
import {TrangHoiDapComponent} from "./TrangLienQuan/TrangHoiDap/TrangHoiDap.component";
import {FormsModule} from "@angular/forms";
import {ShareButtonsModule} from "ng2-sharebuttons";
import {TrangNguoiDungComponent} from "./TrangNguoiDung/TrangNguoiDung.component";
import {TrangXemDiemComponent} from "./TrangLienQuan/TrangXemDiem/TrangXemDiem.component";
import {Services} from "./Services/Config.services";
import {Method} from "./Services/Method";
import {CircleComponent} from "./TrangLienQuan/Circle/Circle.component";


enableProdMode();
@NgModule({
  imports: [BrowserModule, Ng2PaginationModule, ShareButtonsModule.forRoot(),
    AppRoutingModule, HttpModule, JsonpModule, FormsModule],
  declarations: [AppComponent, HomepageComponent, HomepageBannerMainComponent, HomepageDetailComponent,
    HomepageBannerRightComponent, FooterComponent, TrangTinTongHopComponent, TrangNoiDungComponent, TrangXemDiemComponent,
    MenuTrangNoiDungComponent, TrangHoiDapComponent, TrangNguoiDungComponent, CircleComponent],
  providers: [Services, Method],
  bootstrap: [AppComponent]
})
export class AppModule {

}
