import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper';
import Loader from './components/Loader';
import FixedImage from './components/FixedImage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Style.css'

const App = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true,
        });

        function page4Animation() {
            const elemC = document.querySelector("#elem-container");
            const fixed = document.querySelector("#fixed-image");

            elemC.addEventListener("mouseenter", () => {
                fixed.style.display = "block";
            });
            elemC.addEventListener("mouseleave", () => {
                fixed.style.display = "none";
            });

            const elems = document.querySelectorAll(".elem");
            elems.forEach(e => {
                e.addEventListener("mouseenter", () => {
                    const image = e.getAttribute("data-image");
                    fixed.style.backgroundImage = `url(${image})`;
                });
            });
        }

        function swiperAnimation() {
            new Swiper(".mySwiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 100,
            });
        }

        function menuAnimation() {
            const menu = document.querySelector("nav h3");
            const full = document.querySelector("#full-scr");
            const navimg = document.querySelector("nav img");
            let flag = 0;

            menu.addEventListener("click", () => {
                if (flag === 0) {
                    full.style.top = 0;
                    navimg.style.opacity = 0;
                    flag = 1;
                } else {
                    full.style.top = "-100%";
                    navimg.style.opacity = 1;
                    flag = 0;
                }
            });
        }

        function loaderAnimation() {
            const loader = document.querySelector("#loader");
            setTimeout(() => {
                loader.style.top = "-100%";
            }, 4200);
        }

        swiperAnimation();
        page4Animation();
        menuAnimation();
        loaderAnimation();
    }, []);

    return (
      <div id='main' className='App'>
            <Loader />
            {/* <Navbar /> */}
            <FixedImage />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page5/>
           <Footer />
           </div>
    );
};

export default App;
