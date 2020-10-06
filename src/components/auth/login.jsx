import React from "react";

import { Button, Row, Col, Container } from "reactstrap";
import Link from "next/link";
import Icons from "components/common/Icons";
import Controller_Users from "fetchers/Users";
import DB from "helpers/db";
import { useRouter } from "next/router";

export default function login() {
  const users = new Controller_Users();
  const db = new DB();
  const router = useRouter();

  const openTargetPage = () => {
    const targetPage = db.get("targetPage") || "/";
    router.push(targetPage);
  };

  const submitHandlerLogin = (e) => {
    e.preventDefault();
    users.login(e.target, openTargetPage);
  };

  return (
    <div
      className="d-flex "
      id="home-section"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container className="my-lg-auto " style={{ height: "100%" }}>
        <Row className="align-items-center">
          <Col lg="6" className="mt-5 mt-lg-0">
            <h1
              className="pt-5 mt-3 text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Bienvenido !!!
            </h1>
            <p
              className="mb-4 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Para acceder a todo el contenido de nuestra academia deves iniciar
              sesion en tu cuenta; si no tienes una cuenta, puedes crearla en
              menos de un minuto!
            </p>
          </Col>

          <Col lg="5" className="ml-auto mt-5 mb-5 mb-lg-0">
            <form
              action=""
              method="post"
              className="form-box"
              onSubmit={submitHandlerLogin}
            >
              <h3 className="h4 text-black mb-4">Iniciar sesión:</h3>
              <div className="form-group">
                <input
                  id="input-email"
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email Addresss"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="input-password"
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="custom-control custom-checkbox my-3">
                <input
                  className="custom-control-input"
                  name="remember_token"
                  id="customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label d-inline"
                  htmlFor="customCheckLogin"
                >
                  Recordarme en este dispositivo
                </label>
              </div>
              <div className="form-group text-center">
                <Button type="submit" color="info">
                  Iniciar sesión
                  <Icons icon="sign" className="ml-2" />
                </Button>
              </div>
              <div className="text-center">
                <p className="m-0 text-muted">
                  <Link href="/register">¿No tienes una cuenta?</Link>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
