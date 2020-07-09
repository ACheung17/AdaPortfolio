import React from "react";
import SubNav from "../SubNav";
import Footer from "../Footer";

function ProjectAlbum() {
    return (
        <div>
            <SubNav />
            <div className="album bg-light">
                <div className="myContainer">
                    <h2>Projects</h2>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="images/letsEat-app.png" alt="Let's Eat Web App" />
                                <div className="card-body">
                                    <h5 class="card-title">Let's Eat</h5>
                                    <p className="card-text">Let's Eat is a web app that helps you decide a restaurant for you next meal.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a className="btn btn-sm btn-outline-secondary" href="https://acheung17.github.io/LetsEat-APP/#/" role="button" target="_blank" rel="noopener noreferrer">App</a>
                                            <a className="btn btn-sm btn-outline-secondary" href="https://github.com/ACheung17/LetsEat-APP" role="button" target="_blank" rel="noopener noreferrer">Code</a>
                                        </div>
                                        <small className="text-muted">React.js</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="images/letsEat.jpg" alt="Let's Eat REST API" />
                                <div className="card-body">
                                    <h5 class="card-title">Let's Eat (REST API)</h5>
                                    <p className="card-text">Database of frequently visited restaurants. Data can be request via the RestController.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a className="btn btn-sm btn-outline-secondary" href="https://infinite-dawn-76227.herokuapp.com/restaurants" role="button" target="_blank" rel="noopener noreferrer">App</a>
                                            <a className="btn btn-sm btn-outline-secondary" href="https://github.com/ACheung17/LetsEat-RESTAPI" role="button" target="_blank" rel="noopener noreferrer">Code</a>
                                        </div>
                                        <small className="text-muted">Spring Boot</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="images/postNote.png" alt="Post Notes" />
                                <div className="card-body">
                                    <h5 class="card-title">Post Notes</h5>
                                    <p className="card-text">An app for users to create virtual memos to remind themselves of daily tasks.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a className="btn btn-sm btn-outline-secondary" href="https://acheung17.github.io/PostNotes/" role="button" target="_blank" rel="noopener noreferrer">App</a>
                                            <a className="btn btn-sm btn-outline-secondary" href="https://github.com/ACheung17/PostNotes" role="button" target="_blank" rel="noopener noreferrer">Code</a>
                                        </div>
                                        <small className="text-muted">React.js</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="images/todolist.png" alt="To-Do List" />
                                <div className="card-body">
                                    <h5 class="card-title">To-Do List</h5>
                                    <p className="card-text">A to-do list application where users can add and delete items off a virtual checklist.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a className="btn btn-sm btn-outline-secondary" href="https://acheung17.github.io/PostNotes/" role="button" target="_blank" rel="noopener noreferrer">App</a>
                                            <a className="btn btn-sm btn-outline-secondary" href="https://github.com/ACheung17/PostNotes" role="button" target="_blank" rel="noopener noreferrer">Code</a>
                                        </div>
                                        <small className="text-muted">Node.js</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="images/signupPage.png" alt="Newsletter Subscription" />
                                <div className="card-body">
                                    <h5 class="card-title">Newsletter Subscription</h5>
                                    <p className="card-text">A Newsletter Subscription application hosted with MailChimp.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <a className="btn btn-sm btn-outline-secondary" href="https://polar-sands-98621.herokuapp.com/" role="button" target="_blank" rel="noopener noreferrer">App</a>
                                            <a className="btn btn-sm btn-outline-secondary" href="https://github.com/ACheung17/NewsletterSubscription" role="button" target="_blank" rel="noopener noreferrer">Code</a>
                                        </div>
                                        <small className="text-muted">Node.js</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <p class="lead text-muted">Please visit my GitHub for more projects and their code!</p>
                        <p>
                            <a href="https://github.com/ACheung17?tab=repositories" class="btn btn-primary my-2">Projects on GitHub</a>
                        </p>
                        <Footer />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProjectAlbum;