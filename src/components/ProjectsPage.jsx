import React from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import SubNav from "./SubNav";

function ProjectsPage() {
    return (
        <div>
            <SubNav />
            <Container>
                <h3>Projects</h3>
                
                <ListGroup>
                    <ListGroupItem className="project-list" tag="a" href="/">Post Notes</ListGroupItem>
                    <ListGroupItem className="project-list" tag="a" href="/">To-Do List</ListGroupItem>
                    <ListGroupItem className="project-list" tag="a" href="/projects/newsletter">Newsletter Subscription</ListGroupItem>
                    {/* <ListGroupItem></ListGroupItem> */}
                </ListGroup>
            </Container>

        </div>
    );
}

export default ProjectsPage;