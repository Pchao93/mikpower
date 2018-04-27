import React from 'react';
import Office from './office';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <div className="form-container">
          <h1 className="contact-header">Contact Us</h1>
          <h2 className="contact-subheader">Let us know how we can help you.</h2>
          <form className="contact-form"
            action="https://formspree.io/info@mikpowerinc.com"
            method="POST">

            <div className="inputs">
              <input
                className="contact-name"
                placeholder="Your Name"
                type="text">
              </input>

              <input
                className="contact-company"
                placeholder="Your Company"
                type="text">
              </input>

              <input
                className="contact-email"
                placeholder="Email Address"
                type="text">
              </input>
              <textarea className="contact-message"
                placeholder="Leave your message here...">
              </textarea>
            </div>


          </form>
        </div>
        <div className="office-list-container">
          <h1 className="office-list-header">Our Offices</h1>

          <ul className="office-list">
            <Office
              name="San Jose"
              address={"800 Charcot Ave., Ste 112 San Jose, CA 95131 United States"}
              phone="+1-408-493-5903"
              margin="-10px"
              image="http://mikpowerinc.com/images/city/sj.jpg"
              />
            <Office
              name="Guangzhou"
              address={"#586-588 PanYu G105 DaShiDuan, Jin Yi Shang Ye DaSha, Rm 419, Guangzhou, China 511430"}
              phone="+86-20-66251459"
              margin="-30px"
              image="http://mikpowerinc.com/images/city/gz.jpg"
              />
            <Office
              name="Shenzhen"
              address={"FL 9, Building B, Seven-Star Commercial Plaza, Mei-Long Road, Shenzhen, China 518131"}
              phone="+86-755-29555568"
              margin="0"
              image="http://mikpowerinc.com/images/city/sz.jpg"
              />
            <Office
              name="Hangzhou"
              address={"Shang-Lin S. Road, FuYang, HangZhou, ZheJiang, China"}
              phone="+86-130-0365-4319"
              margin="-30px"
              image="http://mikpowerinc.com/images/city/hz.jpg"
              />
            <Office
              name="Taipei"
              address={"7F, No. 285, Nanking East Rd., Sect. 3,  Song Shan Dist., Taipei, Taiwan 10550"}
              phone="+886-2-2546-6080"
              margin="-20px"
              image="https://www.singaporeair.com/saar5/images/destination/what-to-do/tpe/taipei-101.jpg"
              />
          </ul>
        </div>
      </div>
    );
  }


}

export default Contact;
