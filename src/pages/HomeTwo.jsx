import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import Showcase from "../components/versionTwo/Showcase";
import About from "../components/common/About";
import Features from "../components/versionTwo/Features";
import Services from "../components/versionTwo/Services";
import JointClient from "../components/versionTwo/JoinClient";
import Vision from "../components/common/Vision";
import FunFactCOunter from "../components/versionTwo/FunFactCounter";
import Works from "../components/common/Works";
import Team from "../components/versionTwo/Team";
import Testimonial from "../components/versionTwo/Testimonial";
import Faq from "../components/common/FAQ";
import Pricing from "../components/versionTwo/Pricing";
import Partners from "../components/common/Partners";
import Subscribe from "../components/common/Subscribe";
import Footer from "../components/common/Footer";

class HomeTwo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="home" />
                {/* Showcase: src/components/versionTwo/Showcase */}
                <Showcase />
                {/* About: src/components/common/About */}
                <About />
                {/* Features: src/components/versionTwo/Features */}
                <Features />
                {/* Services: src/components/versionTwo/Services */}
                <Services />
                {/* JointClient: src/components/versionTwo/JoinClient */}
                <JointClient />
                {/* Vision: src/components/common/Vision */}
                <Vision />
                {/* FunFactCOunter: src/components/versionTwo/FunFactCounter */}
                <FunFactCOunter />
                {/* Works: src/components/common/Works */}
                <Works />
                {/* Team: src/components/versionTwo/Team */}
                <Team />
                {/* Testimonial: src/components/versionTwo/Testimonial */}
                <Testimonial />
                {/* Faq: src/components/common/FAQ */}
                <Faq />
                {/* Pricing: src/components/versionTwo/Pricing */}
                <Pricing />
                {/* Partners: src/components/common/Partners */}
                <Partners />
                {/* Subscribe: src/components/common/Subscribe */}
                <Subscribe />
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="home" />
            </React.Fragment>
        );
    }
}

export default HomeTwo;
