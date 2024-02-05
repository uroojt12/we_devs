import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import style from "@/styles/scss/web.module.scss";
import Header from "@/components/header/header";
import {
  Host1,
  Host2,
  Host3,
  Host4,
  Host5,
  Host6,
  Host7,
  Icon1,
  Icon2,
  Icon3,
} from "@/components/images";
const HostingAndMaintenance = () => {
  return (
    <>
      <Header />
      <section id={style.core} style={{ paddingBottom: "0" }}>
        <div className={style.contain}>
          <div className={style.wrapper}>
            <div className={style.content}>
              <h2>
                Our <span>Hosting and Maintenance</span>Services
              </h2>
              <p>
                Our Hosting and Maintenance Services provide comprehensive
                solutions for the seamless management of your website. From
                robust hosting infrastructure to 24/7 monitoring, proactive
                support, data security, and regular maintenance, we ensure your
                website remains secure, performs optimally, and adapts to the
                evolving needs of your business.
              </p>
            </div>
            <div className={style.image}>
              <Image
                style={{ objectPosition: "top" }}
                width={800}
                height={800}
                src={Host1}
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
                  <Image width={1000} height={1000} src={Host2} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Reliable Hosting Solutions</h3>
                  <p>
                    Benefit from our reliable hosting services that ensure your
                    website is consistently accessible and performs optimally.
                    We provide secure and scalable hosting solutions tailored to
                    your specific needs, guaranteeing a seamless online
                    experience for your users.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Host3} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>24/7 Monitoring and Support</h3>
                  <p>
                    Enjoy peace of mind with our around-the-clock monitoring and
                    support. Our team is vigilant, ensuring the continuous
                    availability of your website and promptly addressing any
                    issues that may arise, minimizing downtime.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Host4} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Regular Backups and Data Security</h3>
                  <p>
                    Safeguard your data with our regular backup procedures and
                    robust security protocols. We implement measures to protect
                    against data loss and unauthorized access, prioritizing the
                    confidentiality and integrity of your website's information.
                  </p>
                </div>
              </div>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Host5} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Proactive Maintenance and Updates</h3>
                  <p>
                    Stay ahead with proactive maintenance and regular updates.
                    We take care of software patches, security updates, and
                    performance optimizations to keep your website running
                    smoothly and secure against potential vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Host6} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Scalable Hosting Solutions</h3>
                  <p>
                    Grow your online presence confidently with our scalable
                    hosting solutions. As your website traffic and data storage
                    needs increase, our hosting services adapt to ensure a
                    seamless experience for your users without compromising on
                    performance.
                  </p>
                </div>
              </div>

              <div className={style.inner}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Host7} alt="" />
                </div>
                <div className={style.sub_content}>
                  <h3>Transparent Communication and Reporting</h3>
                  <p>
                    Experience transparency in our communication and reporting.
                    We provide regular updates on hosting performance,
                    maintenance activities, and any necessary improvements. Our
                    goal is to keep you informed and involved in the health and
                    evolution of your web presence.
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
              High-End <span>Hosting</span> and Maintenance
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

export default HostingAndMaintenance;
