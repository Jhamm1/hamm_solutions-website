import React, { Component } from "react";

//Components List
import NavBar from "../components/common/NavBar";
import Showcase from "../components/versionThree/Showcase";
import Features from "../components/versionThree/Features";
import Works from "../components/common/Works";
import About from "../components/common/About";
import Services from "../components/versionThree/Services";
import JointClient from "../components/common/JoinClient";
import FunFactCOunter from "../components/versionThree/FunFactCounter";
import Vision from "../components/common/Vision";
import Team from "../components/versionThree/Team";
import Testimonial from "../components/versionThree/Testimonial";
import Faq from "../components/versionThree/FAQ";
import Pricing from "../components/versionThree/Pricing";
import Partners from "../components/common/Partners";
import Subscribe from "../components/common/Subscribe";
import Footer from "../components/common/Footer";

class HomeThree extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                {/* NavBar: src/components/common/NavBar */}
                <NavBar pageName="home" />
                {/* Showcase: src/components/versionThree/Showcase */}
                <Showcase />
                {/* Features: src/components/versionThree/Features */}
                <Features />
                {/* Works: src/components/common/Works */}
                <Works />
                {/* About: src/components/common/About */}
                <About />
                {/* Services: src/components/versionThree/Services */}
                <Services />
                {/* JointClient: src/components/common/JoinClient */}
                <JointClient />
                {/* FunFactCOunter: src/components/versionThree/FunFactCounter */}
                <FunFactCOunter />
                {/* Vision: src/components/common/Vision */}
                <Vision />
                {/* Team: src/components/versionThree/Team */}
                <Team />
                {/* Testimonial: src/components/versionThree/Testimonial */}
                <Testimonial />
                {/* Faq: src/components/versionThree/FAQ */}
                <Faq />
                {/* Partners: src/components/common/Partners */}
                <Partners />
                {/* Pricing: src/components/versionThree/Pricing */}
                <Pricing />
                {/* Subscribe: src/components/common/Subscribe */}
                <Subscribe />
                {/* Footer: src/components/common/Footer */}
                <Footer pageName="home" />
            </React.Fragment>
        );
    }
}

export default HomeThree;
