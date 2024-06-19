import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { createNote } from '../assets'
import PostFormNote from './ui/PostFormNote'

const CreateNote = () => {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="w-16 h-16 flex items-center justify-center absolute right-10 bottom-10 bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none rounded-2xl data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <Plus />
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full items-center justify-center max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <div className='flex flex-col items-center justify-center gap-y-2'>
                    <img
                      src={createNote}
                      width={36}
                      height={36}
                      alt="add"
                    />
                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                      Create Notes
                    </DialogTitle>
                  </div>
                  <PostFormNote />
                  <div className="mt-4 items-center justify-center flex text-center">
                    <Button
                      className="inline-flex gap-2 items-center justify-center rounded-md bg-indigo-700 w-[18rem] text-center py-3 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-yellow-600 data-[open]:bg-yellow-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Add task
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateNote