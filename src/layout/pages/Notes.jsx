import { Plus } from 'lucide-react'
import React from 'react'
import NoteCard from '../../Components/ui/NoteCard'

const Notes = () => {
  return (
    <div>
      <NoteCard />
      <button className='w-16 h-16 rounded-2xl bg-n-7 flex items-center justify-center absolute right-10 bottom-10 hover:bg-n-6' >
        <Plus />
      </button>
    </div>
  )
}

export default Notes
