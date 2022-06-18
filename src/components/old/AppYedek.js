import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import WorkerList from './components/WorkerList'
import WorkList from './components/WorkList'

export default function App() {
  return (
    <div>
      <Container>
        <Row>
          <Header />
        </Row>
        <hr />

        <Row>
          <Col xs="6">
            <WorkerList title="My Workers" />
          </Col>

          <Col xs="6">
            <WorkList />
          </Col>
        </Row>

      </Container>
    </div>
  )
}