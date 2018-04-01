import React, {Component} from 'react'
import {Container, Content, Text, Button} from 'native-base'
import axios from 'axios'

export default class TodoDetail extends Component{

  state = {
    obj: {}
  }

  componentWillMount(){
    const {item} = this.props.navigation.state.params

    this.getTodo(item.id)
  }

  getTodo(id){
    axios
    // .get('http://rest.learncode.academy/api/dumbways/todos/' + id)
    .get(`http://rest.learncode.academy/api/dumbways/todos/${id}`)
    .then((result)=>{
      console.log(result)
      this.setState({obj: result.data})
    })
  }

  handleDelete(id){
    axios
    .delete(`http://rest.learncode.academy/api/dumbways/todos/${id}`)
    .then((result)=>{
      this.props.navigation.state.params.allTodos()
      this.props.navigation.goBack()
      // this.setState()
    })
  }

  render(){
    const {item} = this.props.navigation.state.params
    const {obj} = this.state

    return (
      <Container>
        <Content>
          <Text>{item.title}</Text>
          <Text>{obj.title}</Text>
          <Button danger onPress={()=> this.handleDelete(item.id)}>
            <Text>
              Delete
            </Text>
          </Button>
        </Content>
      </Container>
    )
  }
}