import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";


import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

import oferta1 from "./assets/oferta1.png";
import oferta2 from "./assets/oferta2.png";
import oferta3 from "./assets/oferta3.png";
import oferta4 from "./assets/oferta4.png";
import oferta5 from "./assets/oferta5.png";
import oferta6 from "./assets/oferta6.png";



export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+957-044-665",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "rinosZone@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Av. del Gran Capitán, 37",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "oferta",
    text: "oferta",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];


export const ofertas = [
  {
    id: 1,
    image: oferta1,
    name: "Menú Pequeño",
    price: "7.45€",
    description: "Palomitas pequeñas + Refresco pequeño"
  },
  {
    id: 2,
    image: oferta2,
    name: "Menú Mediano",
    price: "7.95€",
    description: "Palomitas medianas + Refresco mediano"
  },
  {
    id: 3,
    image: oferta3,
    name: "Menú Grande",
    price: "8.95€",
    description: "Palomitas XL + Refresco XL"
  },
  {
    id: 4,
    image: oferta4,
    name: "Menú HotDog",
    price: "3.95€",
    description: "HotDog + Refresco"
  },
  {
    id: 5,
    image: oferta5,
    name: "Menú Grande + Refresco",
    price: "8.95€",
    description: "Palomitas XL + 2 Refrescos XL"
  },
  {
    id: 6,
    image: oferta6,
    name: "Menú Infantil",
    price: "5.95€",
    description: "Palomitas pequeñas + Refresco + Golosinas"
  },
];


export const explores = ["Terror", "Popular", "Experimental", "Comedy", "Action"];

export const payements = [payment1, payment2, payment3, payment4];
