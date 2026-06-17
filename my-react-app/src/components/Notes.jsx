import { useState } from "react"

function Notes() {
    const [update, setUpdate] = useState(false);
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
        setUpdate(true);
        update(setUpdate)
        setNote(inputValue)
        setInputValue("")
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
            
            {update ? <div>
                <input 
                type="text"
                value={note}
                onChange={(e) => setInputValue(e.target.value)}
                defaultValue={note}
            /> 

            <button onClick={handleChange}>Save</button>

            </div>
        : <></>}

        </div>: <></> }

    </div>
  )
}

export default Notes


