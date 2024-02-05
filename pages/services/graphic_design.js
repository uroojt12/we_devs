import React from "react";
import style from "@/styles/scss/web.module.scss";
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import {
  Design,
  Icon1,
  Icon2,
  Icon3,
  Offer_1,
  Offer_2,
  Offer_3,
  Offer_4,
  Offer_5,
  Offer_6,
} from "@/components/images";
const GraphicDesign = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>Graphic Design</span>Services
              </h2>
              <p>
                We understand the power of visual communication. Our expert
                graphic design team is here to transform customer ideas into
                stunning visual representations. Whether customer is looking for
                a memorable logo, eye-catching marketing materials, or engaging
                social media graphics.
              </p>
            </div>
            <div className={style.image}>
              <Image
                style={{ objectPosition: "top" }}
                width={800}
                height={800}
                src={Design}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.offering}>
        <div className={style.contain}>
          <div className={style.content}>
            <h2 class="mb-0">
              Our <em>Offerings</em>
            </h2>
          </div>
          <div className={style.flex}>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_1} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Crafting Your Signature Logo</h3>
                  <p>
                    Your logo is more than an image; it's your brand's identity.
                    Let us create a one-of-a-kind logo that speaks volumes about
                    your unique story.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Captivating Your Online Audience</h3>
                  <p>
                    Your logo is more than an image; it's your brand's identity.
                    Let us create a one-of-a-kind logo that speaks volumes about
                    your unique story.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_3} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Building Your Brand's Identity</h3>
                  <p>
                    Your logo is more than an image; it's your brand's identity.
                    Let us create a one-of-a-kind logo that speaks volumes about
                    your unique story.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Packaging Your Products with Style</h3>
                  <p>
                    Your logo is more than an image; it's your brand's identity.
                    Let us create a one-of-a-kind logo that speaks volumes about
                    your unique story.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Transforming Your Ideas into Print</h3>
                  <p>
                    Your logo is more than an image; it's your brand's identity.
                    Let us create a one-of-a-kind logo that speaks volumes about
                    your unique story.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Illustrating Concepts through Infographics</h3>
                  <p>
                    Sometimes, complex information is best conveyed visually.
                    Our infographic design services help you simplify intricate
                    concepts, making information engaging and easy to understand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={style.serve} className={style.service_blocks}>
        <div className={style.contain}>
          <div className={style.content}>
            <h1 className="mb-4">
              High-End <span> Graphic Design</span>
            </h1>
          </div>
          <div className={style.wrapper}>
            <div className={style.column}>
              <div className={style.serve_blk}>
                <div className={style.ico}>
                  <Image width={100} height={100} src={Icon1} alt="" />
                </div>
                <h2>Superb Value</h2>
                <p>
                  Create a captivating online presence with our expert web
                  design services. Our designs are not only visually stunning
                  but also user-friendly and optimized for a seamless user
                  experience.
                </p>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.serve_blk}>
                <div className={style.ico}>
                  <Image width={100} height={100} src={Icon2} alt="" />
                </div>
                <h2>Quality Assured</h2>
                <p>
                  From simple websites to complex web applications, our
                  development team has the skills to turn your ideas into
                  functional and scalable digital solutions.
                </p>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.serve_blk}>
                <div className={style.ico}>
                  <Image width={100} height={100} src={Icon3} alt="" />
                </div>
                <h2>Fast Turnaround</h2>
                <p>
                  If you really want to level up, our custom web design
                  solutions are where it is at. Your brand is unique, so it goes
                  without saying, your e-commerce experience should be too!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default GraphicDesign;
