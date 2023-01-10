// Header
export const PRT_HOME_PAGE = "Home"
export const PRT_ABOUT_PAGE = "About"
export const PRT_RESUME_PAGE = "Resume"
export const PRT_CONTACT_PAGE = "Contact"
export const PRT_WORK_PAGE = "Work"
export const PRT_HOME_PAGE_SECTION = "home_section"
export const PRT_ABOUT_PAGE_SECTION = "about_section"
export const PRT_CONTACT_PAGE_SECTION = "contact_section"
export const PRT_WORK_PAGE_SECTION = "work_section"
export const PRT_BACK_TO_MAIN = "Back to main site"
export const PRT_BACK_TO_HOME = "Back to Home"
export const PRT_BACK_HOME = "Back Home"
export const PRT_LAST_INITALS = "EN"

// Home page
export const PRT_YEAR = "2023"
export const PRT_LOCATION = "Boston"
export const PRT_NAME = "Ellah Nzikoba"
export const PRT_LOCATION_STATE = "Boston, Massachusetts"
export const PRT_FIRST_NAME = "Ellah"
export const PRT_LAST_NAME = "Nzikoba"

export const PRT_HOME_ROLE_ENGINEER = "Aspiring Software Engineer &"
export const PRT_HOME_ROLE_DESIGNER = "Web Designer"
export const PRT_HOME_DESCRIPTION_TOP = "Currently looking for New Grad"
export const PRT_HOME_DESCRIPTION_BOTTOM = "Software Engineering Roles"

// Contact Form
export const PRT_CONTACT_FORM_NAME = "Name"
export const PRT_CONTACT_FORM_EMAIL = "Email"
export const PRT_CONTACT_FORM_COMPANY = "Company"
export const PRT_CONTACT_FORM_MESSAGE = "Message"
export const PRT_CONTACT_FORM_OPTIONAL = "Optional" 
export const PRT_SUBMIT_BUTTON = "Submit"

// Work
export const PRT_CHECK_OUT_MORE = "Check out my more academic projects"
export const PRT_GITHUB_LINK_TEXT = "Github Link"
export const PRT_NEXT = "Next"
export const PRT_PREV = "Prev"

// Links
export const PRT_LINKEDIN_LINK = "https://www.linkedin.com/in/ellah-nzikoba/"
export const PRT_GITHUB_LINK = "https://github.com/nzielln"
export const PRT_BEHANCE_LINK = "https://www.behance.net/ellahnzikoba"
export const PRT_EMAIL_LINK = "mailto:ellahnzikoba@gmail.com?subject=Interested in Connecting"
export const PRT_EMAIL_LINK_SUBJECT = "Interested in Connecting!"

// Pages Link
export const PRT_RESUME_NAME = "resume.pdf"
export const PRT_MORE_PROJECTS_LINK= "/projects/more-projects"
export const PRT_PROJECTS_LINK = "/projects"
export const PRT_HOME_LINK = "/"
export const PRT_RESUME_LINK = "/RESUME/" + PRT_RESUME_NAME


// STYLE

export const PRT_MORE_SPAN = "7"
export const PRT_IMAGES_FOLDER = "IMAGES"
export const PRT_DETAIL_SPAN = "5"

export const PRT_SCROLL_THRESHHOLD = () => {
    if(typeof window !== "undefined") {
        return window.innerWidth * 0.05
    }
    return 150
}

export const PRT_SCROLL_MENU_THRESHHOLD = () => {
    if(typeof window !== "undefined") {
        return window.innerWidth * 0.025
    }
    return 150
}

export const PRT_DEFAULT_MOUSEX = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth * 0.5
    }
    return 0
}

export const PRT_DEFAULT_MOUSEY = () => {
    if (typeof window !== "undefined") {
        return window.innerHeight * 0.5
    }
    return 0
}

export const PRT_SMALL_WIDTH = 450
export const PRT_MEDIUM_WIDTH = 1024
export const PRT_LARGE_WIDTH = 1280

export const PRT_TYPE = "Type"
export const PRT_DESCRIPTION = "Description"

export const PRT_MAIN_COLOR = "#e9e6e7"
export const PRT_DARK_COLOR = "#2d2d34"

export const PRT_OUTLINE_CURSOR_ANIMATION = "prt_outline_cursor_animation"
export const PRT_SCALE_CURSOR_ANIMATION = "prt_scale_cursor_animation"

// REDUX ACTIONS
export const PRT_NEXT_PROJECT_ACTION = "NEXT_ACTION"
export const PRT_PREV_PROJECT_ACTION = "PREV_ACTION"
export const PRT_SET_PROJECT_ACTION = "SET_ACTION"
export const PRT_RESET_PROJECT_ACTION = "RESET_ACTION"


// TYPES

export const PRT_WEB_APPLICATION = "Web Application"
export const PRT_WEB_DEVELOPMENT = "Web Development"
export const PRT_WEB_DESIGN = "Web Design"
export const PRT_IOS = "iOS"
export const PRT_ANDRIOD = "Android"
export const PRT_SWE = "Software Engineering"
export const PRT_OOP = "Object-Oriented Programming"
export const PRT_COMPUTER_SYSTEMS = "Computer Systems"

