import { PRT_ABOUT_PAGE_SECTION } from "../../../CONSTANTS"

const AboutSection = () => {

    return (
        <div
            className="prt_about_page h-screen prt_section md:pt-32 pt-0 md:text-right text-center md:grid md:grid-rows-2 flex flex-col md:justify-between justify-around"
            id={PRT_ABOUT_PAGE_SECTION}>
            <div className="prt_about_me grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3">
                <h4 className="prt_about_me_title_top prt_pf_content_i prt_lowercase md:col-start-1 md:col-span-7 lg:col-start-4 lg:col-span-4 xl:col-start-3 xl:col-span-6">
                    A <span className="prt_pf_content">littl</span>e b
                    <span className="prt_pf_content">it</span> a
                    <span className="prt_pf_content">b</span>ou
                    <span className="prt_pf_content">t</span> me
                </h4>

                <p className="prt_about_content prt_content_style prt_uppercase md:col-start-1 md:col-span-7 lg:col-start-2 lg:col-span-6 xl:col-start-3 xl:col-span-6">
                    Hello. <br />
                    <br />
                    <br />
                    I&#39;m a Master of{" "}
                    <span className="prt_pf_content_i prt_lowercase">
                        Computer Science
                    </span>{" "}
                    candidate at
                    <br className="md:block hidden" />
                    Northeastern University located in{" "}
                    <span className="prt_pf_content_i prt_lowercase">
                        Boston
                    </span>
                    ,<br className="md:block hidden" />
                    Massachusetts. I aspire to create engaging and
                    <br className="md:block hidden" />
                    exciting experiences on the web, with a wide range
                    <br className="md:block hidden" />
                    of interests, from design to machine learning
                </p>
            </div>

            <div className="prt_about_tech grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3 items-center">
                <h4 className="prt_about_me_title md:mb-0 mb-10 md:mt-0 mt-12 prt_pf_content_i prt_lowercase md:col-start-2 md:col-span-2 lg:col-start-4 lg:col-span-2 xl:col-start-6 xl:col-span-2">
                    <span className="prt_pf_content">T</span>ec
                    <span className="prt_pf_content">h</span>no
                    <span className="prt_pf_content">l</span>ogies <br />
                    <span className="prt_pf_content prt_uppercase">I</span> wor
                    <span className="prt_pf_content">k</span> w
                    <span className="prt_pf_content">it</span>h
                </h4>
                <p className="prt_about_content prt_content_style md:col-start-4 md:col-span-5 lg:col-start-6 lg:col-span-5 xl:col-start-8 xl:col-span-5 ">
                    <span className="prt_pf_content_i prt_lowercase">
                        Javasc<span className="prt_pf_content">ri</span>pt
                    </span>{" "}
                    (ES6, ReactJS, NextJS), NodeJS,{" "}
                    <br className="md:block hidden" />
                    CSS, HTML, Swift,{" "}
                    <span className="prt_pf_content_i prt_lowercase">
                        Swift<span className="prt_pf_content">UI</span>
                    </span>
                    , Python
                </p>
            </div>
        </div>
    )
}

export default AboutSection
