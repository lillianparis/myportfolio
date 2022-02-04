import React from "react";
import Carousel from "../../Components/Carousel/carousel";
import "../Developments/style.css";
import DevCards from '../../Components/Cards/cards';
import Footer from "../../Components/Footer/footer"

const Developments = () => {
    return (
        <>
            <body>
                <div class="container">

                    <Carousel />

              
                    <DevCards />
</div>
</body>
<Footer />

</>
);
}

export default Developments;