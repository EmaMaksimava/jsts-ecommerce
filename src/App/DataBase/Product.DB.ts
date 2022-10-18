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

  {
    id: 7,
    name: 'KAMIZELKI',
    image: 'https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87053267_81-99999999_01.jpg?ts=1610636719819&imwidth=502&imdensity=2',
    favorite: false,
    price: 40,
  },

  {
    id: 8,
    name: 'Satynowa bluzka z poduszkami na ramionach',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17099076_61.jpg?ts=1631515713003&imwidth=502&imdensity=2',
    favorite: false,
    price: 26,
  },

  {
    id: 9,
    name: 'Dżinsy Balloon z wysokim stanem',
    image: 'https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87002889_TS.jpg?ts=1620031183562&imwidth=502&imdensity=2',
    favorite: false,
    price: 28,
  },

  {
    id: 10,
    name: 'Skórzane szpilki',
    image: 'https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17020153_99.jpg?ts=1617702092608&imwidth=502&imdensity=2',
    favorite: false,
    price: 140,
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