import { PRT_BEHANCE_LINK, PRT_CONTACT_FORM_COMPANY, PRT_CONTACT_FORM_EMAIL, PRT_CONTACT_FORM_MESSAGE, PRT_CONTACT_FORM_NAME, PRT_CONTACT_FORM_OPTIONAL, PRT_CONTACT_PAGE_SECTION, PRT_EMAIL_LINK, PRT_EMAIL_LINK_SUBJECT, PRT_GITHUB_LINK, PRT_LINKEDIN_LINK } from "../../../CONSTANTS"
import Link from "next/link"

const ContactSection = () => {


    return (
        <div className="prt_contact_page h-screen prt_section flex flex-col justify-center" id={PRT_CONTACT_PAGE_SECTION}>
            <h4 className="prt_contact_form_title prt_pf_content_i prt_lowercase"><span className="prt_pf_content">G</span>et <span className="prt_pf_content">i</span>n <span className="prt_pf_content">t</span>ouc<span className="prt_pf_content">h</span></h4>

            <div
                className="prt_contact_info md:grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3 flex flex-col items-stretch">
                <div className="prt_form md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-7 xl:col-start-1 xl:col-span-7">
                    <form action="" className="prt_contact_form" method="POST" id="prt_contact_form_id">
                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_name" className="prt_form_label prt_required prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_NAME}</label>
                            <input type="text" id="prt_contact_form_name" className="prt_contact_form_input prt_contact_input_text prt_normal_style" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_email" className="prt_form_label prt_required prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_EMAIL}</label>
                            <input type="text" id="prt_contact_form_email" className="prt_contact_form_input prt_contact_input_text prt_normal_style" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_company" className="prt_form_label prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_COMPANY} <span className="prt_lowercase">({PRT_CONTACT_FORM_OPTIONAL})</span></label>
                            <input type="text" id="prt_contact_form_company" className="prt_contact_form_input prt_contact_input_text prt_normal_style" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_message" className="prt_form_label prt_required prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_MESSAGE}</label>
                            <textarea name="prt_form_message" id="prt_contact_form_message" rows={5} className="prt_contact_form_input prt_normal_style"></textarea>
                        </div>


                    </form>
                    <div className="prt_contact_form_submit">
                        <input type="submit" form="prt_contact_form_id" value={"Submit"} className="prt_contact_form_button prt_normal_style prt_uppercase" />
                    </div>
                </div>
                <div className="prt_contact_links md:col-start-7 md:col-span-2 lg:col-start-9 lg:col-span-2 xl:col-start-11 xl:col-span-2 flex flex-col justify-end md:mt-0 md:mb-0 mt-12 mb-28 md:pb-14 md:text-left text-right ">
                    <a href={PRT_LINKEDIN_LINK} className="prt_external_link prt_normal_style prt_uppercase" target="_blank" rel="noreferrer">Linked<span className="prt_pf_normal_i prt_lowercase">in</span></a>
                    <a href={PRT_GITHUB_LINK} className="prt_external_link prt_normal_style prt_uppercase" target="_blank" rel="noreferrer">G<span className="prt_pf_normal_i prt_lowercase">it</span>hub</a>
                    <a href={PRT_BEHANCE_LINK} className="prt_external_link prt_normal_style prt_uppercase" target="_blank" rel="noreferrer"><span className="prt_pf_normal_i prt_lowercase">Be</span>hance</a>
                    <form action={PRT_EMAIL_LINK} method="GET" encType="text/plain" >
                        <label htmlFor="prt_submit_email" className="prt_external_link prt_normal_style prt_uppercase">E<span className="prt_pf_normal_i prt_lowercase">ma</span>il</label>
                        <input type="submit" id="prt_submit_email" value={" "} />
                    </form>

                </div>
                
            </div>
        </div>
    )
}

export default ContactSection
