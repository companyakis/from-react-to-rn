import './App.css'

function App() {
  

  return (
    
    <div className='todo-page'>
      
      <h2>Add ToDo!</h2>
      <form className='todo-form'>
        <label className='todo-title'>ToDo Title</label>
        <input className='todo-content' type="text" />
        <label className='todo-title'>ToDo Description</label>
        <textarea className='todo-content' rows={5}></textarea>
        <button className='todo-create-btn'>Create</button>
      </form>
      <h3>All ToDos</h3>

    </div>
     
  )
}

export default App
