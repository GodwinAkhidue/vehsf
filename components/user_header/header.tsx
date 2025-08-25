import User_Header_Desktop from "./desktop/header";
import User_Header_Mobile from "./mobile/header";

export default function User_Header() {

    return (
        <div className="">
            <User_Header_Desktop />
            <User_Header_Mobile />
        </div>
    );
}