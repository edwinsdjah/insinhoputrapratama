import quoteData from '../../../data/corporate/hero.json';

const Hero = () => {
  return (
    <section className="hero section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="main-text">
              <h6 className="sub-title gr-sunrise-text">How We Are ?</h6>
              <h4 className="fw-700">Ultimate xperiences with story, emotion and purpose</h4>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="hero-cont">
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">W</span>e help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-pattern bottom left"></div>
    </section>
  )
}

export default Hero