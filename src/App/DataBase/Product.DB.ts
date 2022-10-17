import { Product } from "../Interfaces/Product";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Futrzana kamizelka kombi',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17085921_08_D3.jpg?ts=1631277908456&imwidth=502&imdensity=2',
    favorite: true,
    price: 130,
  },
  {
    id: 2,
    name: 'Bluza pikowana z kapturem',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17059075_68.jpg?ts=1631277908456&imwidth=502&imdensity=2',
    favorite: true,
    price: 90,
  },
  {
    id: 3,
    name: 'Spodenki pikowane z paskiem',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17099074_68_D2.jpg?ts=1631277908456&imwidth=247&imdensity=2',
    favorite: true,
    price: 60,
  },
  {
    id: 4,
    name: 'Sweter dzianinowy w warkocze',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17057109_05.jpg?ts=1628848796255&imwidth=502&imdensity=2',
    favorite: false,
    price: 130,
  },

  {
    id: 5,
    name: 'Dżinsy wideleg z wysokim stanem',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17005947_TS.jpg?ts=1628067044907&imwidth=502&imdensity=2',
    favorite: false,
    price: 115,
  },

  {
    id: 6,
    name: 'Skórzane botki w szpic',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17096310_99.jpg?ts=1631882953424&imwidth=502&imdensity=2',
    favorite: false,
    price: 165,
  },

];

export const getProducts = ():Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout( () => {
      if(Math.random() < 0.3) {
        reject(new Error('Something was wrong!'));

      }else {
        resolve(PRODUCTS);
      }
    }, 2000);
  });
};