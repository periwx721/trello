import { useState, useEffect, useRef } from 'react';
import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useImmer } from 'use-immer';
import ListTitleComponent from './ListTitleComponent';
import AddCardInputBTN from './AddCardInputBTN';
import AddListInputBTN from './AddListInputBTN';
import TodoCard from './TodoCard';


export default function NoteBoard() {
   const[listas,setListas]= useImmer([{ 
        listindex:'',
        title:'',
        addanotherlist:true,
        submittedcardtitle:true,
        submittedtitle:false,
        todos:[],
   }]);  

  const empty={
    listindex:'',
    title:'',
    addanotherlist:true,
    submittedcardtitle:true,
    submittedtitle:false,
    todos:[],
  }
  const[input, setInput] = useState();
  const inputRef = useRef(null);


  const[storedValues,setStoredValues]=useState(()=>{
    try {
        const item = window.localStorage.getItem('storedlista');
        return item ? setListas(JSON.parse(item)) : listas;
    } catch (error) {
        console.log(error);
        return listas;
    }
    });  
  

    useEffect(() => {
        localStorage.setItem('storedlista', JSON.stringify(listas));
        
    }, [listas]); 


    useEffect(() => {
        if(listas.addanotherlist) inputRef.current.focus();
    }, [listas.addanotherlist]);

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        };

    function AddAnotherListBTN(index){
        return(
            <button 
                className='flex bg-zinc-200 p-2 rounded-md h-fit w-[272px]
                    flex-shrink-0 bg-opacity-60 hover:shadow-lg'
                onClick={()=>setListas((draft)=>{draft[index].addanotherlist = !draft[index].addanotherlist})}
                >
                <PlusSmallIcon className='w-5 h-5 my-auto'/>
                <h3 className=''>Добавть список</h3>
            </button>
    )}

    function AddCardBTN(index){
      return(
          <button 
              className='flex hover:shadow-md hover:bg-zinc-300 rounded-md 
                  bg-opacity-60 cursor-pointer'
              onClick={()=>
                setListas((draft)=>{
                  draft[index].submittedcardtitle= !draft[index].submittedcardtitle;
                })

              }>
              <PlusSmallIcon className='w-5 h-5 my-auto'/>
              <h3 className=''>Добавить карточку</h3> 
          </button>
    )}
    function addList(index){
        const newlistas = [...listas,empty];
        setListas(newlistas);
        setListas((draft)=>{
            draft[index].submittedtitle = !draft[index].submittedtitle;
            draft[index].title=input;
            draft[index].listindex=index;
        });
        setInput(''); 
    
    }
    function addTodo(todos,todo,index) {
        if (!todo) return;
        const newTodos = [...todos, todo.toString() ];
        setListas((draft)=>{
            draft[index].submittedcardtitle=!draft[index].submittedcardtitle;
            draft[index].todos=newTodos;
        })
        setInput(''); 
    }; 

    function deleteTodo(index,indext){
        setListas((draft)=>{
            draft[index].todos=draft[index].todos.filter((todo,id) => indext !== id)
        })
    }; 

    function deleteLista(indexl){
       const removedArr =listas.filter((listas,index) => index!==indexl);
        setListas(removedArr);
      };

return(
<div className='flex gap-x-3 overflow-x-auto h-full pb-20 p-10'>
    {listas.map((lista,index) => (
        <div key={index.toString()}>
            
            {lista.addanotherlist? AddAnotherListBTN(index)
                
                :<div className='flex flex-col mb-20 bg-zinc-200 p-2 gap-y-2 rounded-md w-[272px] h-fit flex-shrink-0'>
                    {lista.submittedtitle?
                    <>  <ListTitleComponent
                        listas={listas} setListas={setListas} setInput={setInput}
                        input={input} inputRef={inputRef} handleChange={handleChange}
                        title={lista.title} index={index} deleteLista={deleteLista}/>
                        <>
                            {listas[index].todos.map((todo,indext) => (
                                <TodoCard key={indext.toString()+todo.toString()}
                                    listas={listas} setListas={setListas} todo={todo}
                                    setInput={setInput} input={input} inputRef={inputRef}
                                    handleChange={handleChange} deleteTodo={deleteTodo}
                                    indext={indext} index={index} 
                                    />
                            ))}
                        </>
                        
                        {listas[index].submittedcardtitle? AddCardBTN(index) : 
                            <AddCardInputBTN handleChange={handleChange} addTodo={addTodo} setListas={setListas}
                                listas={listas} index={index} input={input} inputRef={inputRef}/>}
                           
                    </>
                    :
                    <>
                        <AddListInputBTN
                            handleChange={handleChange}
                            input={input}
                            inputRef={inputRef}
                            listas={listas}
                            setListas={setListas}
                            index={index}
                            addList={addList}/>
                    </>
                    }
                    
                </div>
            }
        </div>
    ))}
</div>
);}



