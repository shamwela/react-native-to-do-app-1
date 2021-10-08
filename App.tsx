import React, { useState } from 'react'
import { SafeAreaView, Pressable, TextInput, View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { globalStyles } from './app/styles/global'

const { heading1, regularText } = globalStyles

const App = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([''])

  const handleAdd = () => {
    if (newTask.trim() === '') {
      return
    }

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  return (
    <SafeAreaView
      style={[
        { backgroundColor: '#181818' },
        tailwind('min-h-full p-4 flex-1'),
      ]}
    >
      <Text style={[heading1, tailwind('mb-4')]}>To-do</Text>
      <TextInput
        value={newTask}
        onChangeText={(input) => setNewTask(input)}
        placeholder='Enter your task here'
        style={[regularText, tailwind('bg-gray-800 p-2'), { outline: 'none' }]}
      />

      <Pressable
        onPress={handleAdd}
        style={tailwind('bg-blue-500 py-1 px-3 mb-4')}
      >
        <Text style={regularText}>+ Add task</Text>
      </Pressable>

      {tasks.map((task, index) => {
        return (
          <View key={index}>
            {task !== '' && (
              <View style={tailwind('mb-4 flex flex-row items-center')}>
                <Pressable
                  onPress={() => {
                    setTasks(tasks.filter((_, i) => i !== index))
                  }}
                  style={tailwind('px-3')}
                >
                  <Text style={regularText}>✔</Text>
                </Pressable>

                <Text style={regularText}>{task}</Text>
              </View>
            )}
          </View>
        )
      })}
    </SafeAreaView>
  )
}

export default App
