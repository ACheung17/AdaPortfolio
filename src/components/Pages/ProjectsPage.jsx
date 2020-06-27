import React from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import SubNav from "../SubNav";

function ProjectsPage() {
    return (
        <div>
            <SubNav />
            <Container>
                <h3>Projects</h3>
                <div>
                View all projects' code here: <a href="https://github.com/ACheung17?tab=repositories">https://github.com/ACheung17?tab=repositories</a>
                </div>
                
                <Container>
                <h5>Detailed Description </h5>
                <ListGroup className="projectList">
                    {/* <ListGroupItem className="project-list" tag="a" href="/">Post Notes</ListGroupItem>
                    <ListGroupItem className="project-list" tag="a" href="/">To-Do List</ListGroupItem> */}
                    <ListGroupItem className="project-list" tag="a" href="#/projects/newsletter">Newsletter Subscription</ListGroupItem>
                    {/* <ListGroupItem></ListGroupItem> */}
                </ListGroup>
                </Container>
                
            </Container>
            {/* <Footer /> */}
        </div>
    );
}

export default ProjectsPage;