import { PRT_ABOUT_PAGE_SECTION } from "../../../CONSTANTS"


const AboutSection = () => {
    return (
        <div className="prt_about_page h-screen prt_section grid grid-rows-2" id={PRT_ABOUT_PAGE_SECTION}>
            <div className="prt_about_me grid grid-cols-12">
                <h4 className="prt_about_me_title prt_pf_content_i text-right col-start-7 col-span-2">a <span>littl</span>e b<span>it</span> a<span>b</span>ou<span>t</span> me</h4>

                <p className="prt_about_content prt_content_style prt_uppercase text-right col-start-5 col-span-4">
                    Hello. <br /><br /><br />
                    I&#39;m a Master of <span>Computer Science</span> candidate at Northeastern University located in <span>Boston</span>, Massachusetts.
                    I aspire to create engaging and exciting experiences on the web, with a wide range of interests, from design to machine learning.
                </p>

            </div>

            <div className="prt_about_tech grid grid-cols-12 items">
                <h4 className="prt_about_me_title prt_pf_content_i col-start-6 col-span-1"><span>t</span>ec<span>h</span>no<span>l</span>ogies <span>I</span> wor<span>k</span> w<span>it</span>h</h4>
                <p className="prt_about_content prt_content_style col-start-8 col-span-3">
                    <span>Javasc<span className="prt_span_normal">ri</span>pt</span> (ES6, ReactJS, NextJS), NodeJS, CSS, HTML, Swift, <span>Swift<span className="prt_span_normal">UI</span></span>, Python
                </p>


            </div>
        </div>
    )
}

export default AboutSection