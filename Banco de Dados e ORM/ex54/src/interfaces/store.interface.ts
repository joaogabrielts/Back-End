import {IProduct} from "./products.interface"

export interface IStore{
      id:number,
      name:string,
      products?: IProduct[]
}

export type TUpdateStoreBody = Partial<Pick <IStore, 'name'>>;