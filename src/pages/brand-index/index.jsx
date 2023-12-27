/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLightLayout from '../../layouts/main-light';
//= Components
import StickyBar from '../../components/Common/StickyBar';
import Brands from '../../components/Corporate/Brands';
import Footer from "../../components/Footers/CorporateFooter";

const BrandCorporate = () => {
  useEffect(() => {
    document.body.classList.add('brand-corporate');

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
        <title>PT Insinho Putra Pratama</title>
      </Head>

      <MainLightLayout>
        <StickyBar />
        <Brands />
        <Footer />
      </MainLightLayout>
    </>
  )
}

export default BrandCorporate;