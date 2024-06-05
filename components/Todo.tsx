export default function Todo({ setTodos }: any) {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const value = event.target.todo.value
    setTodos((prevTodos: any) => [
      ...prevTodos,
      { title: value, id: self.crypto.randomUUID(), isCompleted: false },
    ])
    event.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Type your next task"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <button>
        <span className="hidden">Submit</span>
      </button>
    </form>
  )
}
