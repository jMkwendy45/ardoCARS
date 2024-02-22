import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helment/Helment";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import Header from "../components/Header/Header";


const Blog = () => {
    return (
        <Helmet title="Blogs">
            <Header/>
            <CommonSection title="Blogs" />
            <section>
                <Container>
                    <Row>
                        <BlogList />
                        <BlogList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Blog;