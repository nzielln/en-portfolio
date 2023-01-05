import { PRT_LOCATION_STATE, PRT_NAME } from "../../CONSTANTS"

const Footer = () => {

    return (
        <div className="prt_footer h-16 flex justify-between">
            <h4 className="prt_footer_name prt_footer_style prt_uppercase">{ PRT_NAME}</h4>
            <h4 className="prt_footer_details prt_footer_style prt_uppercase"> { PRT_LOCATION_STATE}</h4>
        </div>
    )
}

export default Footer