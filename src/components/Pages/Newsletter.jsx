import React from 'react';
import SubNav from "../SubNav";
import Footer from "../Footer";

function Newsletter() {
    return (
        <div>
            <SubNav moreLinks={true} />
            <div className="container projects">
                <h2>Newsletter Subscription Application</h2>
                <p><strong>
                    Click the link to try it out:
                    <a href="https://polar-sands-98621.herokuapp.com/">
                        https://polar-sands-98621.herokuapp.com/
                    </a>
                </strong></p>
                
                <p>
                    This is a newsletter subscription application that collects and stores
                    user's email, first and last name. Collected data is added to a mailing
                    list, and is managed my MailChimp's services.
                </p>
                <p>
                    The front-end of the application is structured with HTML5 and styled
                    with CSS3/Bootstrap, while the back-end is done with Node.js along with
                    Express.js frameworks. To utilize MailChimp's services, the back-end is
                    connected to MailChimp's API to request for its services.
                </p>
                <p>
                    The main page consists of three input fields to allow the user to
                    provide their data; one "Sign Me Up" button to allow submittion of
                    user's data; and a "Unsubscribe" button that allow subscribed members to
                    unsubscribe.
                </p>
                <img className="projectImg" src="images/signupPage.jpg" alt="Newsletter Signup Page" />
                <p>
                    After users provide their data through the input fields, and click the
                    "Sign Me Up" button. Feedback is provided to the user. A successful
                    feedback would be like this:
                </p>
                <img
                    className="img2"
                    src="images/successFeedback.PNG"
                    alt="Successfully subscribed"
                />
                <p>
                    While an unsuccessful feedback would look like this:
                </p>
                <img
                    className="img2"
                    src="images/failToSub.PNG"
                    alt="Fail to subscribe"
                />
                <p>
                    A "Try Again" button is provided for the user to have easy access back to the
                    main page for another try.
                </p>
                <p>
                    When the "Unsubscribe" button is clicks, the user is lead to a page
                    where they can provide the email that they would like to be unsubscribed from
                    the from the mailing list.
                </p>
                <img className="projectImg" src="images/unsubPage.PNG" alt="Unsubscribe Page" />
                <p>
                    Similiar to subscribing, unsubscribing also provides feedback to the user:
                </p>
                <img className="img2" src="images/successUnsub.PNG" alt="Successfully Unsubscribed" />
                <p>
                    In the case of an unsuccessful unsubscribing process, for example,
                    providing a non-existing or mispelt email, will result in the
                    following feedback message:
                </p>
                <img className="img2" src="images/failToUnsub.PNG" alt="Fail to unsubscribe" />
                
            </div>
            <Footer home={false} />
        </div>
    );
}

export default Newsletter;