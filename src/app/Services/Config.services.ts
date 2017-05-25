/**
 * Created by haitr on 5/19/2017.
 */
import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from "@angular/http";
let headers = new Headers({'Content-Type': 'application/json'});
let options = new RequestOptions({headers: headers});
let url = 'https://bss-vla.herokuapp.com/';
/*let url='https://localhost:/';*/
@Injectable()
export class Services {

  constructor(public  http: Http) {

  }

  /*Services for news start*/
  GetNews() {
    return this.http.post(url + 'news/selectrecent', '', options)
      .map((res: Response) => res.json())
  }

  GetNewsById(id: any) {
    return this.http.post(url + 'news/selectdetail/', {id: id}, options)
      .map((res: Response)=>res.json())
  }

  GetNewsRelate(id: any, cate: any) {
    return this.http.post(url + 'news/selectrelate/', {id: id, link: cate}, options)
      .map((res: Response)=>res.json())
  }

  GetNewsByCategory(link: string) {
    return this.http.post('https://bss-vla.herokuapp.com/news/selectcategory', {link: link}, options)
      .map((res: Response)=>res.json())
  }

  /*Services for news end*/

  /*Services for score start*/
  GetDiem(code: string) {
    return this.http.post(url + 'student/selectone', {code: code}, options)
      .map((res: Response)=>res.json())
  }

  /*Services for score end*/

  /*Services for cate start*/
  GetCategory() {
    return this.http.post(url + 'category/select', '', options)
      .map((res: Response)=>res.json())
  }

  GetCategoryByLink(link: string) {
    return this.http.post(url + 'category/selectbylink', {link: link}, options)
      .map((res: Response)=>res.json())
  }

  /*Services for cate end*/

  /*Services for question start*/
  CreateCauhoi(question: string, questionperson: string, questiontime: string, email: string) {
    return this.http.post(url + 'question/create', {
      question: question,
      questionperson: questionperson,
      questiontime: questiontime,
      email: email
    }, options)
      .map((res: Response)=>res.json());
  }

  GetCauTraLoi() {
    return this.http.post(url + 'question/selectapprove', '', options)
      .map((res: Response)=>res.json())
  }

  /*Services for question end*/

  /*Services for image start*/
  GetImage() {
    return this.http.post(url + 'banner/selectposition1', '', options)
      .map((res: Response)=> res.json())
  }

  /*Services for image end*/
}
