//APp.jsx

import "../style/carosel.scss";//app.scss
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data.jsx";
export default function RecyclerList() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.img}
      price={item.price}
      description={item.description}
      link={item.link}
    />
  ));
  return (
    <div className="App">
      <h1>Recycler List</h1>
      <Carousel 
      showDots={false}
       infiniteLoop={true}
       arrows={true}
       autoPlay={true}
       showStatus={false}
       showThumbs={false}
       interval={300} 
       showIndicators={false}
      responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}