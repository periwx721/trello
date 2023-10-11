

export default function TodoList(props){
    return(
        <>
        
        </>
    
)}


const storedlista= JSON.parse(localStorage.getItem("storedlista"));
if(storedlista) setListas(storedlista)
function updateLS() {
    localStorage.setItem("storedlista", JSON.stringify(listas));
}

const[clickedTitle, setClickedTitle]=useState(false);
{clickedTitle? <component1 /> : <component2 /> }

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

function updateLS() { 
    const notesText = document.querySelectorAll("textarea");
    const notes = []; 
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    
    localStorage.setItem("notes", JSON.stringify(notes));
}