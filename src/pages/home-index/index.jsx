/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import Header from '../../components/Corporate/Header';
import Hero from '../../components/Corporate/Hero';
import Services from '../../components/Corporate/Services';
import Portfolio from '../../components/Corporate/Portfolio';
import Skills from '../../components/Corporate/Skills';
import Process from '../../components/Corporate/Process';
import Brands from '../../components/Corporate/Brands';
import Footer from "../../components/Footers/CorporateFooter";

const HomeCorporate = () => {
  useEffect(() => {
    document.body.classList.add('index-corporate');

    const removeClasses = [
      'land-demo2', 'index-bus1',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'index-main', 'mobile-app',
      'gr-orange-bg', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  return (
    <>
      <Head>
        <title>Insinho Putra Pratama</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Skills />
        <Process />
        <Brands lineHead={true} additionalClass="section-padding pt-80"/>
        <Footer />
      </MainLightLayout>
    </>
  )
}

export default HomeCorporate;