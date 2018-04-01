import React, {Component} from 'react'
import {
  Container, Content, Text,
  Col, Row, Grid, Button
} from 'native-base'
import ReduxExample from './components/ReduxExample'

export default class Counters extends Component{

  state = {
    counter: 0
  }

  handleInc(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleDec(){
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render(){
    return (
      <Container style={{justifyContent: 'center'}}>
        <Content>
          <Grid>
            <Row>
              <Text style={{fontSize: 50, textAlign:'center'}}>
                {this.state.counter}
              </Text>
            </Row>
          </Grid>
          <Grid>
            <Col>
              <Button success onPress={()=> this.handleInc()}>
                <Text> + </Text>
              </Button>
            </Col>
            <Col>
              <Button warning onPress={()=> this.handleDec()}>
                <Text> - </Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}