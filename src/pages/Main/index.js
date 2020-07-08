import React, { Component, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Platform } from 'react-native';

import {
  Container,
  Form,
  Input,
  List,
  SubmitButton,
  Header,
  TextHeader,
} from './styles';

import ItemList from '../../components/item';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');

  async function handleAddTask() {
    const search = tasks.filter(t => t === newTasks);

    if (search.length !== 0) {
      Alert.alert('Atenção!', 'Nome da tarefa repetido!');
      console.log('nome repetido');
      return;
    }

    if (newTasks) {
      setTasks([...tasks, newTasks]);
      setNewTasks('');
    }

    Keyboard.dismiss();
  }

  async function handleDeleteTask(item) {
    Alert.alert(
      'Deletar anotação',
      'Tem certeza que deseja deletar esta anotação?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return;
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => setTasks(tasks.filter(t => t !== item)),
        },
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    async function carregaDados() {
      const tasks = await AsyncStorage.getItem('tasks');

      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaLocal() {
      AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
    salvaLocal();
  }, [tasks]);

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={{ flex: 1 }}>
        <Container>
          <List
            data={tasks}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => (
              <ItemList task={item} onCancel={() => handleDeleteTask(item)} />
            )}
          />
          <Form>
            <Input
              autoCorrect={true}
              placeholder="Adicionar uma tarefa"
              value={newTasks}
              onChangeText={text => setNewTasks(text)}
              returnKeyType="send"
              maxLength={25}
            />
            <SubmitButton onPress={() => handleAddTask()}>
              <Icon name="add" size={20} color="#fff" />
            </SubmitButton>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}

Main.navigationOptions = {
  title: 'ListMy - Lista de Tarefas',
};
