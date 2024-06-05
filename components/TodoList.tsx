export default function TodoList({ todos }: any) {
  //   console.log(todos)
  return (
    <ol id="todo-list" className="w-full gap-4 flex flex-col">
      {todos && todos.length > 0 ? (
        todos?.map((item: any, index: any) => <Item key={index} item={item} />)
      ) : (
        <p>Your list is empty!</p>
      )}
    </ol>
  )
}

function Item({ item }: any) {
  return (
    <li id={item?.id} className="flex justify-between items-center w-full">
      <div>
        <p>{item?.title}</p>
      </div>
      <div className="flex gap-1 items-center">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-check"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </li>
  )
}
