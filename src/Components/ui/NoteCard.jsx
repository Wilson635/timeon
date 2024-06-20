import { Delete, DeleteIcon, Edit, PinIcon, Trash2 } from 'lucide-react'
import React from 'react'

const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinned
}) => {
    return (
        <div className="flex h-full max-h-80 flex-col border rounded-xl text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white">
            <div className="bg-gray-100 flex border-b items-center justify-between rounded-t-xl py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-n-8">
                    {date}
                </p>
                <p className={`mt-1 text-sm text-n-3 cursor-pointer ${isPinned ? 'text-yellow-600'  : 'text-n-3'}`}>
                    <PinIcon onClick={onPinned} />
                </p>
            </div>
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                    {content}
                </p>

                <div className="mt-3 justify-end ali inline-flex items-end gap-x-5 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none" href="#">
                    <div className='flex gap-3 cursor-pointer mt-5 w-10 h-10 bg-n-7 rounded-full text-n-3 hover:text-white items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-40'>

                        <Edit onClick={onEdit} />
                    </div>
                    <div className='flex gap-3 cursor-pointer mt-5 w-10 h-10 bg-n-7 rounded-full text-n-3 hover:text-white items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-40'>

                        <Trash2 onClick={onDelete} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
