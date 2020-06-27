import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import siteConfig from "../../data/SiteConfig";
import brand from "../../content/images/brand.png";
import "../components/Icons/FontAwesome";
import "../styles/shiba.min.css";
import "../../content/styles/customize.scss";

const MainLayout = ({ children, hasFooter = true}) => (
  <div>
    <Helmet htmlAttributes={{ lang: siteConfig.siteLang }}>
      <meta name="description" content={siteConfig.siteDescription} />
      <meta name="google-site-verification" content="g6Z-Q6RzMa5kRT-YFOG8vFl5klCJHaIVZ_mZzYFiGcw">
      <meta name="naver-site-verification" content="c88b4c221e02f10f0d8f64e01e59cb85d4968497" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134142894-2"></script>
      <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-134142894-2');
      </script>
    </Helmet>
    <Navigation
      brand={brand}
      title={siteConfig.navTitle}
      links={siteConfig.navLinks}
    />
    {children}
    {hasFooter && (
      <Footer
        socials={siteConfig.socialLinks}
        links={siteConfig.footerLinks}
        copyright={siteConfig.copyright}
      />
    )}
    <ScrollToTop
      color="#FFF"
      bgColor="grey-half"
    />
    <script type="text/javascript" src="//js.users.51.la/20273417.js"></script>
  </div>
)

export default MainLayout;
