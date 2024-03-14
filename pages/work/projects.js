import React from "react";
import style from "@/styles/scss/web.module.scss";
import Image from "next/image";
import {
  PhotoShowcase10,
  PhotoShowcase11,
  PhotoShowcase12,
  PhotoShowcase13,
  Pro1,
  Pro2,
  Pro3,
  Pro4,
  Pro5,
  Pro6,
  Pro7,
  Pro8,
  Pro9,
  Pro10,
  Pro11,
  Pro12,
} from "@/components/images";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <section id={style.projects}>
        <div className={style.contain}>
          <h2>
            All <span>Projects</span>
          </h2>
          <div className={style.wrapper}>
            <div className={style.column}>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro1} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://axiomtechnology.io/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Axiom Technology</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro2} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://blootopia.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Blootopia</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro3} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://bridge-axis.vercel.app/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Bridge Axis</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro4} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://campvine.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Campvine</h4>
                </div>
              </div>
            </div>
            <div className={style.column}>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro5} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://www.crainly.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Crainly</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro6} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="http://cultural-candy.herokuapp.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Cultural Candy</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro7} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://modiglianiantiquites.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Modigliani Antiquités</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro8} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://www.herosolutions.com.pk/metoo/orow/index.php"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Orow Construction</h4>
                </div>
              </div>
            </div>
            <div className={style.column}>
              {/* <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro9} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://steveparkrealtor.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}>
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Steve Park Realtor</h4>
                  <p>Online platform for distance learning</p>
                </div>
              </div> */}
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro9} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://tastehub.com.au/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>Taste Hub</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro11} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://theethicalchoice.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>The Ethical Choice</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro10} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://thegeneva-collection.com/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>The Geneva Collection</h4>
                </div>
              </div>
              <div className={style.showcase_blk}>
                <div className={style.image}>
                  <Image width={1000} height={1000} src={Pro12} alt="" />
                  <div className={style.overlay}>
                    <Link
                      href="https://wedevs-sigma.vercel.app/"
                      className={`${style.site_btn} ${style.simple} ${style.round}`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
                <div className={style.text}>
                  <h4>WeDevs</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
