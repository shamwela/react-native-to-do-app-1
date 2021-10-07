import React, { useState } from 'react'
import { SafeAreaView, Pressable, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import RegularText from './components/RegularText'

export default function App() {
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
      <TextInput
        value={newTask}
        onChangeText={(input) => setNewTask(input)}
        placeholder='Enter your task here'
        style={[
          {
            fontSize: 20,
          },
          tailwind('bg-gray-800 p-2 text-white'),
        ]}
      />

      <Pressable
        onPress={handleAdd}
        style={tailwind('bg-blue-500 py-1 px-3 mb-4')}
      >
        <RegularText>+ Add task</RegularText>
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
                  <RegularText>✔</RegularText>
                </Pressable>

                <RegularText>{task}</RegularText>
              </View>
            )}
          </View>
        )
      })}
    </SafeAreaView>
  )
}
