import React from 'react'
import Link from 'gatsby-link'
import config from "../../data/SiteConfig";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import SiteLogo from "../components/SiteLogo/SiteLogo";
import Innovation from "../components/Innovation/Innovation";
import Features from "../components/Features/Features";
import Cta from "../components/CTA/Cta";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <div>
    <MainHeader className="post-head" cover={config.siteCover}>
      <MainNav cover={config.siteCover}>
        <SiteLogo logo={config.siteLogo} title={config.siteTitle} />
      </MainNav>
    </MainHeader>
    <Features />
    <Cta />
    <Footer />
  </div>
)

export default IndexPage
