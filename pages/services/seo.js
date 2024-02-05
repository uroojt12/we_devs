import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import style from "@/styles/scss/web.module.scss";
import Header from "@/components/header/header";
import {
  Seo1,
  Seo2,
  Seo3,
  Seo4,
  Seo5,
  Seo6,
  Seo7,
  Icon1,
  Icon2,
  Icon3,
  Web6,
} from "@/components/images";
const SEO = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>SEO Identity</span>Services
              </h2>
              <p>
                Our SEO Identity Services are designed to elevate your online
                presence strategically. Beginning with a thorough SEO audit, we
                identify opportunities and tailor a comprehensive strategy.
                Strategic keyword research, content optimization, and
                link-building efforts enhance your visibility. Our focus on
                local SEO ensures prominence in relevant geographic searches.
              </p>
            </div>
            <div className={style.image}>
              <Image
                style={{ objectPosition: "top" }}
                width={800}
                height={800}
                src={Seo1}
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
                  <Image width={1000} height={1000} src={Seo7} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Comprehensive SEO Audit</h3>
                  <p>
                    In-depth analysis of your website's current SEO status.
                    Identification of strengths, weaknesses, and opportunities
                    for improvement. Customized recommendations based on the
                    audit results.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Seo2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Strategic Keyword Research and Optimization</h3>
                  <p>
                    Thorough keyword research to target relevant and
                    high-converting terms. Strategic integration of keywords
                    into on-page elements for maximum impact. Continuous
                    optimization to align with evolving search trends.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Seo3} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Content Strategy and Optimization</h3>
                  <p>
                    Development of a content strategy to enhance relevance and
                    engagement. Optimization of existing content and creation of
                    new, SEO-friendly content. Integration of multimedia
                    elements for a well-rounded user experience.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Seo4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Link Building and Off-Page SEO</h3>
                  <p>
                    Proactive link-building strategies to enhance domain
                    authority. Engagement with authoritative platforms to build
                    a strong online presence. Off-page optimization techniques
                    to boost credibility and visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Seo5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Local SEO Enhancement</h3>
                  <p>
                    Optimization for local search, including Google My Business
                    management. Local citation building to ensure accurate
                    business information across platforms. Strategies to enhance
                    visibility in local searches and attract local customers.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Seo6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Performance Monitoring and Reporting</h3>
                  <p>
                    Continuous monitoring of key SEO performance metrics.
                    Regular reporting on keyword rankings, website traffic, and
                    conversion rates. Data-driven insights for ongoing
                    refinement and optimization.
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
              High-End <span> SEO Identity</span>
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

export default SEO;
