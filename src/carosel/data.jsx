import Arihant from "../recycler_list/ARIHANT.webp";
import bharat from "../recycler_list/bharat_e_waste.jpg";
import E_clean from "../recycler_list/E_clean_green.jpg";
import eco from "../recycler_list/eco_tech.png";
import green from "../recycler_list/GreenEnviro.jpg";
import indian from "../recycler_list/indian_trader.jpg";
import js from "../recycler_list/js_enterprises_homeloan_cover.jpg";


export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      // img:"/GreenEnviro.jpg",
      img:Arihant,
      name: "Arihant E-Recycling Pvt Ltd",
      description: "The business strives to make for a positive experience through its offerings...",
       link: "https://www.justdial.com/jdmart/Mumbai/Arihant-E-Recycling-Pvt-Ltd-Near-Shimpoli-Signal-Borivali-West/022PXX22-XX22-150206102148-J8K1_BZDET/catalogue",
    },
    {
      id: 2,
      img:
      bharat,
      name: "Bharat E Waste Recycling Co.",
      description: "Bharat E Waste Recycling Co.offers a complete e waste recycling solution...  ",
      link: "https://www.bharatrecycling.com/",
    },
    {
      id: 3,
      img:
        E_clean,
      name: "E Clean E Green Recycling ",
      description: "E-Clean Recycling Private Limited (EClean EGreen) is India's first.......",
      link: "https://www.ecleanegreen.in/",
    },
    {
      id: 4,
      img:eco,
      name: "Eco-Tech Waste Recycling",
      description: "Eco-Tech Rec,headquatered in mumbai,india's leading waste recycle..",
      link: "https://www.ecotechrecycling.in/",
    },
    {
      id: 5,
      img:green,
      name: "E Clean E Green Recycling",
      description: "E-Clean E-Green Recycling Private Limited (EClean EGreen) is India's first..",
      link: "https://www.ecleanegreen.in/",
    },
    {
      id: 6,
      img:indian,
      name: "Green Enviro Services",
      description: "Green Enviro is one of the leading environmental consultancy and Laboratory..",
      link: "https://environmenttestinglab.com/?gad_source=1&gclid=CjwKCAiAuNGuBhAkEiwAGId4aj68pA_oUaUTryIV_O3Tmlrh6SGYyXsif57wzMEQWf8gYRlXNGzVQBoCLx4QAvD_BwE",
    },
    {
      id: 7,
      img:js,
      name: "J.S.Enterprises Recycle",
      
      description: "Computers are need of the time .BE it for personal use or any business requirement..",
      link: "https://recohub.com/?gad_source=1&gclid=CjwKCAiAuNGuBhAkEiwAGId4ao8QGgELo1qrEc8BW9mQIZ-wPpZy8vB4DDfXCw47S-nrHIyfmYnZJBoCyOwQAvD_BwE",
    },
    {
      id: 8,
      img:E_clean,
      name: "E Clean E Green Recycling ",
      description: "E-Clean Recycling Private Limited (EClean EGreen) is India's first.......",
      link: "https://www.ecleanegreen.in/",
    },
  ];