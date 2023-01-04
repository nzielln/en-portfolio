import { PRT_ABOUT_PAGE_SECTION } from "../../../CONSTANTS"


const AboutSection = () => {
    return (
        <div className="prt_about_page h-screen prt_section grid grid-rows-2 items-center" id={PRT_ABOUT_PAGE_SECTION}>
            <div className="prt_about_me grid grid-cols-12">
                <h4 className="prt_about_me_title prt_pf_content_i prt_lowercase text-right col-start-7 col-span-2">A <span className="prt_pf_content">littl</span>e b<span className="prt_pf_content">it</span> a<span className="prt_pf_content">b</span>ou<span className="prt_pf_content">t</span> me</h4>

                <p className="prt_about_content prt_content_style prt_uppercase text-right col-start-5 col-span-4">
                    Hello. <br /><br /><br />
                    I&#39;m a Master of <span className="prt_pf_content_i prt_lowercase">Computer Science</span> candidate at Northeastern University located in <span className="prt_pf_content_i prt_lowercase">Boston</span>, Massachusetts.
                    I aspire to create engaging and exciting experiences on the web, with a wide range of interests, from design to machine learning.
                </p>

            </div>

            <div className="prt_about_tech grid grid-cols-12 items">
                <h4 className="prt_about_me_title prt_pf_content_i prt_lowercase col-start-6 col-span-1"><span className="prt_pf_content">T</span>ec<span className="prt_pf_content">h</span>no<span className="prt_pf_content">l</span>ogies <span className="prt_pf_content prt_uppercase">I</span> wor<span className="prt_pf_content">k</span> w<span className="prt_pf_content">it</span>h</h4>
                <p className="prt_about_content prt_content_style col-start-8 col-span-3">
                    <span className="prt_pf_content_i prt_lowercase">Javasc<span className="prt_pf_content">ri</span>pt</span> (ES6, ReactJS, NextJS), NodeJS, CSS, HTML, Swift, <span className="prt_pf_content_i prt_lowercase">Swift<span className="prt_pf_content">UI</span></span>, Python
                </p>


            </div>
        </div>
    )
}

export default AboutSection