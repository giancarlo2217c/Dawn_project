import React from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import styles from "./Header.module.css"

export function Header() {
    return (
        <header>
        <Row>
            <Col className = "col-sm"><h1  className = {styles.title}>Welcome to the new Age of <div className = {styles.word}>Empathy</div> </h1></Col>
            <Col className = "col-sm"></Col>
            <Col className = "col-sm"/>
        </Row>
        </header>
    )
}