import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  return (
    // FULL PAGE BACKGROUND
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      
      {/* CARD */}
      <div className="w-full max-w-xl bg-gray-600 p-6 rounded-lg">
        
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Learn about redux toolkit
        </h1>

        <AddTodo />

        <h2 className="text-white text-lg text-center mt-4 mb-2">
          Todos
        </h2>

        <Todo />

      </div>
    </div>
  )
}

export default App
