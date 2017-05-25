import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./TrangChu/trangchu/Homepage.component";
import {TrangNoiDungComponent} from "./TrangNoiDung/TrangNoiDung.component";
import {TrangTinTongHopComponent} from "./TrangTinTongHop/TrangTinTongHop.component";
import {TrangHoiDapComponent} from "./TrangLienQuan/TrangHoiDap/TrangHoiDap.component";
import {TrangNguoiDungComponent} from "./TrangNguoiDung/TrangNguoiDung.component";
import {TrangXemDiemComponent} from "./TrangLienQuan/TrangXemDiem/TrangXemDiem.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'tintuc/:category', component: TrangTinTongHopComponent},
  {path: 'noidung/:route/:id/:title', component: TrangNoiDungComponent},
  {path: 'hoidap', component: TrangHoiDapComponent},
  {path: 'trangnguoidung', component: TrangNguoiDungComponent},
  {path: 'tracuudiemthi', component: TrangXemDiemComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
