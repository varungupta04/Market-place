import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpapercave.com/uwp/uwp1383039.jpeg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Sony Playstation 5 825GB SSD"
            price={990}
            rating={5}
            image="https://images.immediate.co.uk/production/volatile/sites/3/2020/08/playstation-5-77d37a0.jpg?quality=90&resize=980,654"
          />
          <Product
            id="49538094"
            title="Milton Flask - Thermosteel Flip Lid, 1 L Box"
            price={10.0}
            rating={4}
            image="https://www.bigbasket.com/media/uploads/p/l/40025248_3-milton-flask-thermosteel-flip-lid.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Chunky butter chicken spread"
            price={7.99}
            rating={4}
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyu1yORzMxHUuGbHP3dBQIiAybOry57hyalIFshhuZyKqBxGAiz6DnJJKur9KUWI3jModyXh5ARH5CJMo8gAkeVYa4A-TRT0lY_PlNCehhe3UamcLhUxK9&usqp=CAE"
          />
          <Product
            id="23445930"
            title="Class mate notebook facts!!"
            price={8.99}
            rating={5}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUrN7EFdTognMh2NHnAy8nt39tuQgYgYt-lMh2Fi4YX6ZaZMC-PqATJNALJ2BOyf1iYUiF1NgXhN-XZDKsxNlfZCpZMgaD1s6a1LLlIuA&usqp=CAE"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Octane gel best pen in the world"
            price={1094.98}
            rating={4}
            image="https://cdn.thetealmango.com/wp-content/uploads/2021/09/luxury-pens-2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
