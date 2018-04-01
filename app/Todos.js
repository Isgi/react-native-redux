import React, { Component } from 'react';
import {
  Container, Text, Content, List,
  ListItem, Fab, Body, Right,
  Form, Item, Input
} from 'native-base';
import { Modal, Button, View, StyleSheet } from 'react-native';
import axios from 'axios'

export default class Todos extends Component {

  constructor() {
    super();
    console.log("Constructor")
    //initial state
    this.state = {
      modalVisible: false,
      list: [],
      name: '',
      age: 0,
      formValues: {}
    }
  }

  componentWillMount(){
    console.log("Component Will Mount");
    //before rendering data to screen,
    //assign array of obj to list state
    this.allTodos()
  }

  allTodos(){
    axios
    .get('http://rest.learncode.academy/api/dumbways/todos')
    .then((result)=>{
      console.log(result)
      this.setState({list: result.data})
    })
  }

  handleModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  handleChangeText = (key, value) => {
    // this.setState({name: text});
    let formValues = {...this.state.formValues}
    formValues[key] = value
    this.setState({
      formValues
    })
  }

  handleSubmit = () => {
    //post data into endpoint
    axios
    .post(
      'http://rest.learncode.academy/api/dumbways/todos',
      this.state.formValues
    )
    .then((result)=>{
      this.allTodos()
    })
    this.handleModalVisible();
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            { this.state.list.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onPress={()=> {
                      this.props.navigation.navigate('TodoDetail', {
                        item,
                        allTodos: this.allTodos.bind(this)
                      })
                  }}
                >
                  <Text>{item.title}</Text>
                  <Text>{item.is_finished? "Finish": "Unfinish"}</Text>
                </ListItem>
              )
            }) }
          </List>
        </Content>

        <Fab onPress={this.handleModalVisible} >
          <Text>Add</Text>
        </Fab>

        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={false}
          >
          <Form style={styles.containerForm}>
            <Item>
              <Input
                placeholder="Title"
                onChangeText={(text)=>this.handleChangeText('title', text)} />
            </Item>
            <Item>
              <Input
                placeholder="Age"
                onChangeText={(text)=>this.handleChangeText('age', text)} />
            </Item>
            <View style={styles.containerButton}>
              <Button
                title="Submit"
                onPress={this.handleSubmit}/>
              <Button
                title="Cancel"
                onPress={this.handleModalVisible}/>
            </View>
          </Form>
        </Modal>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerForm: {
    marginTop: 59
  }
})