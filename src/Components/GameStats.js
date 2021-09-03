import React from "react"
import Dice from "./Dice"
import Player1Card from "./Player1Card"
import Player2Card from "./Player2Card"
import { Container, Row, Col  } from 'reactstrap';
import "./GameStats.css"


function GameStats(){
    return( 
        <div>
            <h4>GAME STATS</h4>
            <Container className = "Table">
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }} className = "Player1">
                        <Player1Card />
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }} className = "Player2">
                        <Player2Card />
                    </Col>       
                </Row>
                <Row>      
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <Dice />
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default GameStats