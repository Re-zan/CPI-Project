import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import FooterPart from '../Footer/FooterPart'
import Mainnavbarpart from '../Mainnavbar/Mainnavbarpart'
import TopMenu from '../Topmenubar/TopMenu'
import Topsearch from '../Topsearchbar/Topsearch'

export default function MainRegister() {
  return (
    <>
      <TopMenu/>
      <Topsearch />
      <Mainnavbarpart/>
      <div style={{ background:"#eef0f0"}} className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="m-auto">
              <div className="Contact_section py-5 rounded shadow p-5 bg-body rounded">
                <div className="Contact_text d-flex justify-content-around mb-5 pb-4 border-bottom">
                  <div>
                    <NavLink to="/login" className='fw-bolder fs-5' style={{ color:"#333333" }}>LOGIN</NavLink>
                  </div>
                  <div>
                    <NavLink to="/register" className='fw-bolder fs-5' style={{ color:"#333333" }}>REGISTER</NavLink>
                  </div>
                </div>
                <Form className="">
                <Form.Group
                    className="mb-4"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="fw-normal fs-6">
                      Full name*
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Full Name"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="fw-normal fs-6">
                    Username or email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-4"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="fw-normal fs-6">Mobile*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className='fw-normal fs-6'>Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter your email Password" />
                  </Form.Group>

                  <p className='text-justify fs-6 fw-normal mb-4' style={{ color:"#6c757d" }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span style={{ color:"#c39f57" }}>privacy policy</span>.</p>


                  <div className="w-25 m-auto text-center">
                    <Button
                      className="contact_btn fw-bolder"
                      type="submit"
                      style={{ background: "#c39f57" }}
                    >
                      SIGN UP
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    <FooterPart/>
    </>
  )
}
