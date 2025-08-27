import { TrashIcon } from "@heroicons/react/16/solid"
import { PencilIcon } from "@heroicons/react/16/solid"

export default function TodoItem({ tarea, toggleComplete, eliminarTarea, editarTarea }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-2 p-3 shadow-md rounded ">
        <span className={tarea.completada ? 'line-through' : 'text-gray-400'}> 
        {tarea.texto}
        </span>
        <div className="flex items-center gap-2">
          <input
           type="checkbox"
           checked={tarea.completada}
           onChange={toggleComplete}
        
      />
      <button onClick={() => eliminarTarea(tarea.id)}>

         <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500"/>
    
      </button>
        <button onClick={() => editarTarea(tarea.id)}>

             <PencilIcon className="w-5 h-5 text-gray-400 hover:text-blue-500"/>

        </button>
       </div>
    </div>
  );
}
