import { useState } from "react"

function Notes() {

    const[inputValue, setInputValue] = useState("")
    const[note, setNote] = useState("");

    const handleChange = () => {
        alert('Note Added')
        setNote(inputValue)
        setInputValue("")
    }

    const handleDelete = () => {
        setNote(null)
        alert('Note deleted successfully!')
        
    }

    const handleUpdate = () => {

    }

  return (
    <div>
        <h1>Create Notes and Make Studying Easy</h1>

        <p>Add Note</p>
        <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={ handleChange }>Add Note</button>

        <p>{note}</p> 
        {note ? <div>
            <button onClick={ handleDelete }>Delete</button> 
            <button onClick={ handleUpdate }>Update</button> 

            <input 
                type="text"
                value={note}
                onChange={(e) => setInputValue(e.target.value)}
                defaultValue={note}
            />

        </div>: <></> }

    </div>
  )
}

export default Notes


