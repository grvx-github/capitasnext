"use client";

import Header from "../Components/Header";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import InnerBanner from "../Components/InnerBanner";

import ServiceBox from "../Components/ServiceBox";
import ServiceMain from "../serviceMain";

const ServicePage = () => {
  return (
    <div className="servicePage">
      <div className="innerHeader">
        <Header />
        <InnerBanner />
      </div>
      <div className="servicesMain">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {ServiceMain.map((srv, i) => {
                return (
                  <ServiceBox
                    key={i}
                    title={srv.title}
                    icon={srv.icon}
                    content={srv.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Services />

      <Footer />
    </div>
  );
};

export default ServicePage;
