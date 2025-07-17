export interface IFacility {
  name: string;
  details: string;
}

export interface IService {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: IFacility[];
}
