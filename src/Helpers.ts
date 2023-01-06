import { Type } from "@prisma/client"
import { PRT_ANDRIOD, PRT_COMPUTER_SYSTEMS, PRT_IOS, PRT_OOP, PRT_SWE, PRT_WEB_APPLICATION, PRT_WEB_DESIGN, PRT_WEB_DEVELOPMENT } from "./CONSTANTS"

export const TypeEnumType = (typeEnum: string) => {
    switch (typeEnum) {
        case Type.WEB_APPLICATION:
            return PRT_WEB_APPLICATION
        case Type.WEB_DESIGN:
            return PRT_WEB_DESIGN
        case Type.WEB_DEVELOPMENT:
            return PRT_WEB_DEVELOPMENT
        case Type.SWE:
            return PRT_SWE
        case Type.OOP:
            return PRT_OOP
        case Type.COMPUTER_SYSTEMS:
            return PRT_COMPUTER_SYSTEMS
         case Type.IOS:
            return PRT_IOS
         case Type.ANDROID:
            return PRT_ANDRIOD
        
    }
}
