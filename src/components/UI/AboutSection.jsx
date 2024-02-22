import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Ardo Cars service</h2>
              <p className="section__description">
                At Ardo cars we are enthusiasts dedicated to providing our customers
                with a superior car-buying experience. With 7 years
                of combined experience in the industry, our team is passionate about
                matching drivers with their perfect vehicle, whether it's a reliable
                daily commuter, a rugged off-road adventurer, or a luxury sedan
                that exudes sophistication.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Purchasing
                  a car is a significant decision.
                </p>

                {/*<p className="section__description d-flex align-items-center gap-2">*/}
                {/*  <i className="ri-checkbox-circle-line"></i>Unwavering commitment to*/}
                {/*  integrity and personalized service*/}
                {/*</p>*/}
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> We look forward to welcoming you to the
                  family.
                </p>

                {/*<p className="section__description d-flex align-items-center gap-2">*/}
                {/*  <i className="ri-checkbox-circle-line"></i> To help you*/}
                {/*  drive away happy in the car of your dreams..*/}
                {/*</p>*/}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
