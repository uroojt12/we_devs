import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import style from "@/styles/scss/web.module.scss";
import Header from "@/components/header/header";
import {
  Tech1,
  Tech2,
  Tech3,
  Tech4,
  Tech5,
  Tech6,
  Tech7,
  Icon1,
  Icon2,
  Icon3,
  Web6,
} from "@/components/images";
const Technology = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>Technologies</span>
              </h2>
              <p>
                Choose our Web Development Technology Services for access to
                cutting-edge stacks, full-stack expertise, responsive web
                design, secure e-commerce solutions, scalable architectures, and
                an agile development approach that ensures your web solutions
                are technologically advanced and aligned with your business
                goals.
              </p>
            </div>
            <div className={style.image}>
              <Image
                style={{ objectPosition: "top" }}
                width={800}
                height={800}
                src={Tech7}
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
                  <Image width={1000} height={1000} src={Tech1} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Innovative Technology Solutions</h3>
                  <p>
                    Explore innovative and state-of-the-art technology solutions
                    tailored to your business needs. We stay abreast of the
                    latest trends to offer you cutting-edge web technologies
                    that elevate your online presence.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Tech2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Tech Expertise Across Frameworks</h3>
                  <p>
                    Benefit from our expertise across a variety of web
                    development frameworks. Our skilled team is proficient in
                    leveraging technologies like React, Angular, Vue.js, and
                    others to build dynamic and interactive web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Tech3} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Responsive Web Design and UX</h3>
                  <p>
                    Prioritize a superior user experience with our responsive
                    web design services. We ensure your website not only looks
                    visually appealing but also functions seamlessly across
                    various devices, enhancing user engagement.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Tech4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Secure and Scalable Solutions</h3>
                  <p>
                    Trust in our commitment to security and scalability. We
                    implement robust security measures and scalable
                    architectures to safeguard your web applications and ensure
                    they can grow seamlessly with your business.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Tech5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Agile Development Methodology</h3>
                  <p>
                    Embrace an agile development approach that fosters
                    collaboration and adaptability. Through regular sprints,
                    feedback loops, and transparent communication, we ensure the
                    development process is responsive to your evolving needs.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Tech6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Continuous Integration and DevOps Practices</h3>
                  <p>
                    Leverage continuous integration and DevOps practices for
                    streamlined development and deployment. Our commitment to
                    automation and collaboration ensures faster time-to-market
                    and reliable web solutions.
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
              High-End <span> Web Technologies</span>
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

export default Technology;
