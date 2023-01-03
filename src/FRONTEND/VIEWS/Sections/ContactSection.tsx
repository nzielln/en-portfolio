import { PRT_CONTACT_FORM_COMPANY, PRT_CONTACT_FORM_EMAIL, PRT_CONTACT_FORM_MESSAGE, PRT_CONTACT_FORM_NAME, PRT_CONTACT_FORM_OPTIONAL, PRT_CONTACT_PAGE_SECTION } from "../../../CONSTANTS"


const ContactSection = () => {


    return (
        <div className="prt_contact_page h-screen prt_section flex flex-col" id={PRT_CONTACT_PAGE_SECTION}>
            <h4 className="prt_contact_form_title prt_pf_content_i prt_lowercase">Get in touch</h4>

            <div className="prt_contact_info grid grid-cols-12">
                <div className="prt_form col-start-1 col-span-7">
                    <form action="" className="prt_contact_form" method="POST">
                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_name" className="prt_form_label prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_NAME}</label>
                            <input type="text" id="prt_contact_form_name" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_email" className="prt_form_label prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_EMAIL}</label>
                            <input type="text" id="prt_contact_form_email" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_company" className="prt_form_label prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_COMPANY} <span className="prt_lowercase">({PRT_CONTACT_FORM_OPTIONAL})</span></label>
                            <input type="text" id="prt_contact_form_company" />
                        </div>

                        <div className="prt_contact_form_input_group flex flex-col">
                            <label htmlFor="prt_contact_form_message" className="prt_form_label prt_normal_style prt_uppercase">{PRT_CONTACT_FORM_MESSAGE}</label>
                            <textarea name="prt_form_message" id="prt_contact_form_message" cols={30} rows={10}></textarea>
                        </div>
                       

                    </form>
                </div>
                <div className="prt_contact_links col-start-10 col-span-3"></div>
            </div>
        </div>
    )
}

export default ContactSection