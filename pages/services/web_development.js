import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import style from "@/styles/scss/web.module.scss";
import Header from "@/components/header/header";
import {
  Dev1,
  Dev2,
  Dev3,
  Dev4,
  Dev5,
  Dev6,
  Icon1,
  Icon2,
  Icon3,
  Web6,
} from "@/components/images";
const WebDevelopment = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>Web Development</span>Services
              </h2>
              <p>
                we specialize in creating dynamic and impactful web solutions
                tailored to meet your business needs. Our dedicated team of
                skilled web developers is committed to delivering high-quality,
                cutting-edge websites that elevate your online presence.
              </p>
            </div>
            <div className={style.image}>
              <Image
                style={{ objectPosition: "top" }}
                width={800}
                height={800}
                src={Web6}
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
                  <Image width={1000} height={1000} src={Dev1} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Custom Website Development</h3>
                  <p>
                    We craft bespoke websites that are uniquely designed to
                    represent your brand and engage your target audience.
                    Whether you need a corporate website, portfolio site, or
                    e-commerce platform, we've got you covered.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Dev2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Responsive Design</h3>
                  <p>
                    In the era of diverse devices, we ensure that your website
                    looks stunning and functions seamlessly on desktops,
                    tablets, and smartphones. Our responsive design approach
                    guarantees an optimal user experience across all screen
                    sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Dev3} alt="" />
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
                  <Image width={1000} height={1000} src={Dev4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Content Management Systems (CMS)</h3>
                  <p>
                    Take control of your website's content with our CMS
                    solutions. We integrate user-friendly systems like WordPress
                    or custom CMS to empower you to manage and update your site
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Dev5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>E-Commerce Solutions</h3>
                  <p>
                    Ready to take your business online? Our e-commerce
                    development services empower you to establish a secure and
                    efficient online store. From product listings to secure
                    payment gateways, we handle it all.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Dev6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Web Application Development</h3>
                  <p>
                    Beyond websites, we create robust web applications to
                    streamline your business processes. Whether it's a customer
                    portal, project management tool, or internal communication
                    platform, we can build it.
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
              High-End <span> Web Development</span>
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
                  solutions are where it&lsquo;s at. Your brand is unique, so it
                  goes without saying, your e-commerce experience should be too!
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

export default WebDevelopment;
