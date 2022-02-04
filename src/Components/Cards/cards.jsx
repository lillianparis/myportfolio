import React from "react";
import Password from "../Images/passwordapp.png";
import Team from "../Images/teamprofilegenerator.png";
import Note from "../Images/notetaker.png";
import Schedule from "../Images/schedule.png";
import Artscape from "../Images/artscape.png";
import Toolkit from "../Images/toolkit.png";
import Loading from "../Images/loading.jpg";
import Invitor from "../Images/invitor.png";
import "../Cards/style.css"


function Devcard() {
    return (
        <div class="hi">
        <body>
            {/* <div class="container"> */}

                <div class="row">

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="1" class="Password" src={Password} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Password Generator<i class="material-icons right">more_vert</i></span>
                                <p><a href="https://lillianparis.github.io/password-generator/">View</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
                                <p> This application serves to create a better sense of security for password keeping.
                                    Employers want interactive pages that are also secure and user
                                    friendly, this page is meant to showcase the creators javascript knowledge and logic.</p>
                            </div>
                        </div>
                    </div>


                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="2" class="teamprofilegenerator" src={Team} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Team Profile Generator<i class="material-icons right">more_vert</i></span>
                                <p><a href="https://drive.google.com/file/d/1MxspBT2Xze1QpznwIGkqXLbvKcreYTV3/view?usp=sharing">View</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
                                <p> Building a Node CLI One of the most important aspects of programming is writing
                                    code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as
                                    important as the code itself. In this homework assignment, your challenge is to build a Node CLI
                                    that takes in information about employees and generates an HTML webpage that displays summaries for
                                    each person. Since testing is a key piece in making code maintainable, you will also be ensuring
                                    that all unit tests pass.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="5" class="notetaker" src={Note} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Note Taker<i class="material-icons right">more_vert</i></span>
                                <p><a alt="3" href="https://arcane-shore-48502.herokuapp.com/">View</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
                                <p>This application is designed for users that need to keep track of a lot of
                                    information. It can be easy to forget or be unable to recall inportant information. Being able to
                                    take persistent notes allows users to have written information when needed.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="1" class="schedule" src={Schedule} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Workday Scheduler<i class="material-icons right">more_vert</i></span>
                                <p><a href="https://lillianparis.github.io/work-day-scheduler/ ">View</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
                                <p>his calender application helps its users manage their time more efficiently, alongside the demands of a busy
                                    schedule. This application color codes activies based on past, present and future tasks also allowing the user to save their activities to view at a later time.</p>
                            </div>
                        </div>
                    </div>


                </div>

                <h1>Applications in Production</h1>
                <div class="row">

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="2" class="activator" src={Artscape} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Artscape<i class="material-icons right">more_vert</i></span>
                                {/* <p><a href="#">Pending</a></p> */}
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Artscape<i class="material-icons right">close</i></span>
                                <p>A great place for artists to share their masterpieces. You may chose the option of, art lover or artist. This application uses firebase!</p>
                            </div>
                        </div>
                    </div>


                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="3" class="activator" src={Toolkit} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Toolkit<i class="material-icons right">more_vert</i></span>
                                {/* <p><a href="#">Pending</a></p> */}
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Toolkit<i class="material-icons right">close</i></span>
                                <p>One App that has it all... Deployment coming soon 2022..</p>
                            </div>
                        </div>

                    </div>

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="4" class="activator" src={Loading} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Shopper<i class="material-icons right">more_vert</i></span>
                                {/* <p><a href="#">Pending</a></p> */}
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Shopper<i class="material-icons right">close</i></span>
                                <p>Pending information</p>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m6 l3"><p></p>
                        <div class="card" id="hello">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img alt="5" class="activator" src={Invitor} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">RSVPlanner<i class="material-icons right">more_vert</i></span>
                                <p><a href="https://proj2-dionysus.herokuapp.com/">View</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Description<i class="material-icons right">close</i></span>
                                <p>This applications allows its users to plan and post activities. Invitor + utilizes API's, displaying daily activities to users, allowing them to share with others as well as creating their own activities.</p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}

            </div>
        </body>
        </div>
    )
}

export default Devcard;