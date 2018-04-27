import React from "react";
import Product from './product';

class Solutions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="solutions">


        <h1 className="solutions-header">Lighting Solutions</h1>

          <div className="product-line-description">
            {"MikPower Technologies' core competency lies in developing power IC products and providing total solutions for LED lighting applications. We offer a number of LED driver IC products, LED luminaire modules and light products to a wide range of customers."}
          </div>

        <div className="product-list-container">
          <h1 className="product-list-header">Our Products</h1>
          <ul className="product-list">
            <Product
              image={"http://mikpowerinc.com/images/product/E27-1.jpg"}
              name={"5W E27 Light Bulb"}
              details={"Daylight / 4500K CCT- AC220V / 50 Hz- 400 lm- CRI > 70- E27 Medium Base".split("- ")}
              />
            <Product
              image={"http://mikpowerinc.com/images/product/T8.jpg"}
              name={"18W T8 Light Tube"}
              details={"Cool White / 6000K CCT- AC220V / 50 Hz- 168 pcs PLCC3014- 1,500 lm- CRI > 70- Beam angle 130°- 4 ft length".split("- ")}
              />
            <Product
              image={"http://mikpowerinc.com/images/product/T5.jpg"}
              name={"10W T5 Light Tube"}
              details={"Cool White / 6000K CCT- AC120V / 60 Hz- 84 pcs PLCC3014- 800 lm- CRI > 70- Beam angle 130°- 2 ft length- Cascade connection possible".split("- ")}
              />
            <Product
              image={"http://mikpowerinc.com/images/product/3-square-small.jpg"}
              name={"30W Square Light"}
              details={"Daylight White / 4500K CCT- AC120V / 60 Hz- 252 pcs PLCC3014- 2,200 lm- CRI > 80- Beam angle 140°- 60 cm x 60 cm- 2.5 Kg".split("- ")}
              />
            <Product
              image={"http://mikpowerinc.com/images/product/LED_Filament2_225x225.jpg"}
              name={"3W Filament Bulb"}
              details={"Warm White / 3000K CCT- AC120V / 60 Hz- 4 LED filament strings- 290 lm- CRI > 83- PF 0.53- 360° beam angle - E27 screw base".split("- ")}
              />
            <Product
              image={"http://mikpowerinc.com/images/product/COB_4_225x225.jpg"}
              name={"COB Modules"}
              details={"3000K or 4500K CCT- AC230V / 50 Hz- Direct AC line input- 5 / 8 / 10 / 12 / 20 W- Efficacy > 100 lm/W- CRI > 80- PF > 0.90- Hi-pot test > 4000V".split("- ")}
              />
          </ul>
        </div>
      </div>
    );
  }
}

export default Solutions;
