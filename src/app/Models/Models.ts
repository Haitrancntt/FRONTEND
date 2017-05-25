/**
 * Created by haitr on 5/19/2017.
 */
/*Tin tuc models*/
export class Tintuc {
  _source: {
    id: number;
    category: string;
    thumbnail: any;
    title: string;
    shortbrief: string;
    content: string;
    owner: string;
    createdate: string;
    link: string;
  };
}

/*Banners models*/
export class Banners {
  image: string;
}

/*Cau hoi models*/
export class CauHoi {
  _source: {
    id: number;
    question: string;
    question_time: string;
    email: string;
    answer: string;
    answer_person: string;
  };
}

/*Danh muc models*/
export class Danhmuc {
  _id: number;
  name: string;
  link: string;
  active: boolean;
  level: number;
}

/*Diem xet tuyen models*/
export class Diemxettuyen {
  _id: number;
  nam: number;
  sbd: number;
  ho_ten: string;
  cmnd: number;
  khoi: string;
  mon_1: number;
  mon_2: number;
  mon_3: number;
  tong_diem: number;
  nganh: string;
}
