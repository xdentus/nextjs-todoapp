'use client'
import Header from '@/components/Header'
import Todo from '@/components/Todo'
import TodoList from '@/components/TodoList'
import { useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([
    //dummy data just to make sure it works
    // { title: 'Some task', id: self.crypto.randomUUID(), isCompleted: false },
    // {
    //   title: 'Some other task',
    //   id: self.crypto.randomUUID(),
    //   isCompleted: true,
    // },
    // { title: 'last task', id: self.crypto.randomUUID(), isCompleted: false },
  ])
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Header />
        </figure>
        <div className="card-body items-center text-center">
          <Todo setTodos={setTodos} />
          <div className="divider"></div>
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  )
}
