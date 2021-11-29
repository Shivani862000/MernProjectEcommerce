import React from "react";
import "../css/home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/amazon-prime-video-1593003461.jpg"
        />

        <div className="home_row">
        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home_row">
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        
          <Product
              id="5456386"
            title="the leaklsdjfasd fonasdjf"
            price={12.4}
            rating={4}
            image="data:image/jpeg;base64,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"
          />
        </div>
        <div className="home_row">
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
