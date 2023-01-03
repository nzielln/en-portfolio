import Link from "next/link";
import Header from "../COMPONENTS/Header";

const HomeScreen = () => {

    return (
        <div className="prt_homescreen">
            <Header />

            <div className="prt_homescreen_content columns-3 gap-4">
                <div className="prt_year_location_col h-screen "></div>
                <div className="prt_name_col h-screen"></div>
                <div className="prt_role_description_col h-screen"></div>

            </div>
            

        </div>
    )

}


export default HomeScreen