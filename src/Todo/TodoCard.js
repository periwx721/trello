import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function TodoCard(props){
    const[clickedCardTitle, setClickedCardTitle]=useState(false);
    const[priority,setPriority]=useState('');

    
    return(
        <div className='flex justify-start bg-zinc-100 rounded-md h-fit shadow-lg shrink overflow-hidden'>
            <div className={priority+ ' min-w-[2.5%] flex'}></div>
            <div className='flex flex-col p-1 gap-1 my-auto opacity-0 hover:opacity-90'>
                        <button className='bg-red-400 rounded-full h-3 w-3 my-auto'
                        onClick={()=>setPriority('bg-red-400')}></button>
                        <button className='bg-orange-400 rounded-full h-3 w-3 my-auto'
                        onClick={()=>setPriority('bg-orange-400')}></button>
                        <button className='bg-green-400 rounded-full h-3 w-3 my-auto'
                        onClick={()=>setPriority('bg-green-400')}></button>
            </div>
              
            <div className='flex justify-start w-full py-2 shrink'>
                    {clickedCardTitle?
                    <div className='flex justify-between gap-2 pr-2'>
                        <CheckIcon key={props.index} onClick={()=>{
                            if(!props.input) return setClickedCardTitle(!clickedCardTitle);
                            props.setListas((draft)=>{draft[props.index].todos[props.indext] = props.input});
                            props.setInput(''); 
                            setClickedCardTitle(!clickedCardTitle);}}
                            className="h-10 w-10 text-stone-500 rounded-md my-auto shrink-0 
                            hover:shadow-md hover:text-stone-600 hover:bg-zinc-200"
                        />
                        <input
                            placeholder={props.todo ||'Enter List Title'}
                            onChange={props.handleChange}
                            ref={props.inputRef}
                            type="text" 
                            className='p-2 w-3/4 flex my-auto rounded-md bg-inherit shrink overflow-y-visible'
                        />
                        
                    </div>
                    :
                    <div className='flex justify-between w-full gap-2'>
                        <p onClick={()=>setClickedCardTitle(!clickedCardTitle)}
                            className=' text-xl w-full py-1 px-1 min-h-fit  my-auto max-w-[70%] overflow-y-visible overflow-x-clip'>{props.todo}</p>
                        <div className='pr-2'><XMarkIcon key={props.indext}  onClick={()=>props.deleteTodo(props.index,props.indext)}  
                            className="h-10 w-10 text-stone-500 rounded-md my-auto 
                            hover:shadow-md hover:text-stone-600 hover:bg-zinc-200"
                        /></div>
                    </div>}
            </div>
        
            

        </div>
)}


