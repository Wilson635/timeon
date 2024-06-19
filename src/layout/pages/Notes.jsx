import React from 'react'
import NoteCard from '../../Components/ui/NoteCard'
import CreateNote from '../../Components/CreateNotes'

const Notes = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
      <NoteCard
        title="Alarm Control"
        content="Un réveille-matin est un système qui émet un son à une heure prédéterminée. On l'utilise généralement pour se réveiller le matin, d'où son nom"
        date="15 Jun 2024 21: 50"
        isPinned={true}
        onEdit={() => { }}
        onDelete={() => { }}
        onPinned={() => { }}
      />

      <CreateNote />
    </div>
  )
}

export default Notes
