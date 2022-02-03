import React from "react";
import Carousel from "../../Components/Carousel/carousel";
import "../Developments/style.css";
import DevCards from '../../Components/Cards/cards';

const Developments = () => {
    return (
        <>
            <body>
                <div class="container">

                    <Carousel />

                    <h1>Complete Applications</h1>
                    <DevCards />
</div>
</body>

</>
);
}

export default Developments;