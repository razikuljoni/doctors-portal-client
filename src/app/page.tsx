import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurServices from "@/components/OurServices/OurServices";
import SearchDoctor from "@/components/SearchDoctor/SearchDoctor";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
    return (
        <main>
            <section className="">
                <HeroSection />
            </section>
            <section className="">
                <SearchDoctor />
            </section>
            <section className="">
                <OurServices />
            </section>
            <section className="">
                <Testimonials />
            </section>
            <section className="">
                <ContactUs />
            </section>
            <section className="">
                <Footer />
            </section>
        </main>
    );
}
