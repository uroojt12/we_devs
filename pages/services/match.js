import React from "react";
import style from "@/styles/scss/web.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  PhotoMainBanner,
  PhotoOurWork,
  PhotoShowcase07,
  PhotoShowcase03,
  Web5,
  Offer_2,
  Web6,
  Tech7,
  Host1,
  Seo2,
} from "@/components/images";

export default function Match() {
  return (
    <>
      <section id={style.match}>
        <div className={style.block_01}>
          <div className={style.contain}>
            <div className={`${style.content} text-center`}>
              <h2>
                Build <span>More Trust</span>
              </h2>
              <h5>We&lsquo;ve done it before, and we&lsquo;ll do it again.</h5>
            </div>
            {/* <div className={style.image}>
							<Image width={1000} height={800} src={PhotoOurWork} alt="" />
						</div> */}
            <div className={style.video}>
              <video
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline="playsinline"
                preload="metadata"
              >
                <source
                  src="https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p>
              As a tight-knit team of experts, we create memorable and emotional
              websites, digital experiences, and native apps.
            </p>
          </div>
        </div>
        <div className={style.block_02}>
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2>Graphic Design</h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Offer_2} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/graphic_design"
                className={`${style.site_btn} ${style.simple} ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  Immerse your brand in a world of captivating aesthetics with
                  our creative design expertise.
                </p>
                <p>
                  Elevate your digital presence with our creative design
                  prowess. From sleek interfaces to immersive experiences, we
                  blend aesthetics with functionality, ensuring your brand
                  stands out in the online landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.block_02} ${style.block_04} ${style.block_05}`}
        >
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2>Web Design</h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Web5} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/web_design"
                className={`${style.site_btn}  ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  Every pixel we place is a deliberate step toward achieving
                  your business goals. Our strategic design thinking ensures
                  that your website is not just aesthetically pleasing but also
                  serves a purpose – driving engagement and conversions.
                </p>
                <p>
                  User experience is our compass. We design with your audience
                  in mind, creating intuitive interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.block_02}>
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2>Website Development</h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Web6} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/web_development"
                className={`${style.site_btn} ${style.simple} ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  At We devs, we do not just build websites; we engineer digital
                  experiences. Our web development services are a testament to
                  innovation, functionality, and a commitment to bringing your
                  vision to life
                </p>
                <p>
                  We approach web development as a strategic process, aligning
                  every line of code with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.block_02} ${style.block_04} ${style.block_05}`}
        >
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2>Technology</h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Tech7} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/technology"
                className={`${style.site_btn}  ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  At we devs, we do not just keep up with technology; we lead
                  the way. Our commitment to innovation is evident in every
                  solution we provide.
                </p>
                <p>
                  We navigate the ever-evolving tech landscape with expertise in
                  the latest and most powerful technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.block_02}>
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2> Hosting and Maintenance</h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Host1} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/hosting_and_maintenance"
                className={`${style.site_btn} ${style.simple} ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  At we devs, we understand that a robust online presence
                  requires more than just a website. It requires reliable
                  hosting and proactive maintenance to keep your digital space
                  performing at its best.
                </p>
                <p>
                  Our hosting services provide a robust infrastructure, ensuring
                  your website is always accessible and delivers an exceptional
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.block_02} ${style.block_04} ${style.block_05}`}
        >
          <div className={style.contain}>
            <div className={style.wrapper}>
              <h2>SEO Identity </h2>
              <div className={style.image}>
                <Image width={1000} height={800} src={Seo2} alt="" />
              </div>
            </div>
            <div className={`${style.btn_blk} align-items-center`}>
              <Link
                href="/services/seo"
                className={`${style.site_btn}  ${style.round}`}
              >
                Explore More
              </Link>
              <div className={style.content}>
                <p>
                  At SEO Identity, we are not just an SEO service provider; we
                  are your strategic partner in navigating the digital
                  landscape. Our SEO Identity services are meticulously crafted
                  to elevate your online presence and drive meaningful results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.block_03}>
          <div className={style.contain}>
            <h2>
              <em>Creativity</em>
              <span>meets technology</span>
            </h2>
            <div className={style.image_blk}>
              <div className={style.image}>
                <Image width={1000} height={800} src={PhotoMainBanner} alt="" />
              </div>
              <div className={style.image}>
                <Image width={1000} height={800} src={PhotoOurWork} alt="" />
              </div>
            </div>

            <p>
              Embark on a digital journey where creativity meets technology at
              Wedevs. Our team seamlessly integrates innovative design with
              cutting-edge development, crafting solutions that redefine the
              digital experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
