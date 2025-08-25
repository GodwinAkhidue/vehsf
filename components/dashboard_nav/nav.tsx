import Dashboard_Navigation_Desktop from "./desktop";
import Dashboard_Navigation_Mobile from "./mobile";

export default function Dashboard_Navigation() {
    return (
        <div>
            <Dashboard_Navigation_Mobile />
            <Dashboard_Navigation_Desktop />
        </div>
    );
}