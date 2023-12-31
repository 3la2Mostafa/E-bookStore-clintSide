import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();  
  return (
    <>
    <div role="main" className="container about">
        <div id="About">
            <div className="heading d-flex flex-column align-items-center mb-5">
                <div><h1>{t('home.about.title')}</h1></div><div className="small"></div>
            </div>
        </div>
        <h1></h1>
        <p className="text-dark text-center mt-4 fw-semibold">
          {t('home.about.description1')}<br/>
          {t('home.about.description2')}<br />
          {t('home.about.description3')}<br />
          {t('home.about.description4')}
        </p>
    </div>
    <section className="p-5 d-flex justify-content-center text-center w-100 mb-5">
        <div className="lightbox"  data-mdb-zoom-level="0.25" data-id="lightbox-ah1mr9bgo">
            <div className="row">
                <div className="col-lg-4">
                    <img src="https://static1.s123-cdn-static-a.com/uploads/5171355/400_6251bfe9f04d0.jpg" className="w-100 h-auto rounded mb-4" />
                </div>
                <div className="col-lg-4">
                    <img src="https://static1.s123-cdn-static-a.com/uploads/5171355/400_6251bff09cfe5.jpg" className="w-100 h-auto rounded mb-4" />
                </div>
                <div className="col-lg-4">
                    <img src="https://static1.s123-cdn-static-a.com/uploads/5171355/400_6251bff2bb3a5.jpg" className="w-100 h-auto rounded mb-4" />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
