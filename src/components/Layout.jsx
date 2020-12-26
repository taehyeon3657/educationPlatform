import React from "react";
import Footer from "./theme/Footer";
import { Container, Col, Row } from "reactstrap";
import NavbarCourse from "components/theme/NavbarCourse";
import CourseMap from "./course/CourseMap";
import { useRouter } from "next/router";
import Navbar from "./theme/Navbar";

export default function Layout({
  // title,
  children,
  items,
  currentItem,
  course,
}) {
  const { pathname } = useRouter();

  const isNavbarDark = (pathname) => {
    return (
      (pathname !== "/login" &&
        pathname !== "/register" &&
        pathname === "/courses") ||
      // pathname === "/user" ||
      pathname === "/search" ||
      pathname === "/"
    );
  };

  return (
    <>
      {pathname.split("/")[2] ? (
        <Container fluid>
          <Row>
            <Col
              lg={items && pathname !== "/courses" ? "9" : "12"}
              className="p-0 m-0 border-right"
            >
              <Container fluid className="p-0 m-0">
                <NavbarCourse />
                {children}
                <Footer litle />
              </Container>
            </Col>
            {items ? (
              <Col
                lg="3"
                className="p-0 d-none d-lg-block h-100 bg-white"
                style={{
                  overflowY: "scroll",
                  top: 0,
                  right: 0,
                  position: "fixed",
                  marginLeft: "auto",
                }}
              >
                <CourseMap
                  course={course}
                  items={items}
                  currentItem={currentItem}
                />
              </Col>
            ) : null}
          </Row>
        </Container>
      ) : (
        <Container fluid className="p-0">
          <Navbar isDark={isNavbarDark(pathname)} />
          {children}
          {pathname !== "/login" && pathname !== "/register" && <Footer />}
        </Container>
      )}
    </>
  );
}
