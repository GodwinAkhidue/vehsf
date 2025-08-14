
import Donate from "./donate";
import Hero from "./hero";
import Testimonials from "./testimonials";

export default function Donate_Page() {

    return (
        <div className="w-full poppins">
            <Hero />
            <Donate />
            <Testimonials />
        </div>
    );
}