import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import style from "@/styles/scss/web.module.scss";
import Header from "@/components/header/header";
import {
  Web1,
  Web2,
  Web3,
  Web4,
  Web5,
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
const WebDesign = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>Web Design</span>Services
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
                src={Web1}
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
                  <Image width={1000} height={1000} src={Web5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Custom Website Design</h3>
                  <p>
                    Tailored to your brand identity and business goals, we
                    create unique and visually appealing websites. Our designs
                    are not only aesthetically pleasing but also user-friendly,
                    ensuring a positive experience for your visitors.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Web4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Responsive Design</h3>
                  <p>
                    We prioritize responsiveness to guarantee that your website
                    looks and functions seamlessly across various devices,
                    including desktops, tablets, and smartphones. This ensures a
                    consistent and engaging user experience regardless of the
                    device your audience is using.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Web2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>User-Centric Approach</h3>
                  <p>
                    Focusing on your target audience, we design with the
                    end-user in mind. By understanding user behavior and
                    preferences, we create intuitive interfaces that guide
                    visitors through your content and encourage interaction.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Web3} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Performance Optimization</h3>
                  <p>
                    Our designs prioritize performance to ensure fast loading
                    times and smooth navigation. Optimizing images, utilizing
                    efficient coding practices, and leveraging content delivery
                    networks (CDNs) are among the strategies we employ for an
                    optimal user experience.
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
                  <h3>Branding Integration</h3>
                  <p>
                    We seamlessly integrate your brand elements, such as logos,
                    color schemes, and typography, into the design. This fosters
                    brand consistency and recognition, helping to establish a
                    strong and memorable online presence.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Offer_6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Scalability and Future-Proofing</h3>
                  <p>
                    We design with scalability in mind, anticipating your future
                    growth and evolving needs. This ensures that your website
                    can easily accommodate expansions, updates, and new features
                    without compromising its overall design and functionality.
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
              High-End <span> Web Design</span>
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
                  solutions are where it's at. Your brand is unique, so it goes
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

export default WebDesign;
