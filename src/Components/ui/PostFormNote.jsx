import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import React from 'react'
import clsx from 'clsx'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'

const PostFormNote = () => {


  return (
    <>
      <div className="w-full max-w-lg px-4 mt-5">
        <Fieldset className="space-y-6">
          <Field>
            <Label className="text-sm/6 font-medium text-white h3-bold md:h2-bold w-full">Title</Label>
            <div className={clsx(
              'flex items-center justify-center mt-3 w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.172 2.172C2 3.343 2 5.229 2 9v4c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13V9c0-3.771 0-5.657-1.172-6.828C19.657 1 17.771 1 14 1h-4C6.229 1 4.343 1 3.172 2.172m9.335 13.55l-.007.004V7.283l.022-.013c.553-.32 1.447-.796 2.178-1c.54-.149 1.24-.218 1.857-.248c.805-.04 1.443.623 1.443 1.43v5.459c0 .833-.68 1.504-1.51 1.566c-.506.038-1.052.101-1.49.208c-.837.205-1.883.716-2.493 1.037M6 7.496v5.415c0 .833.68 1.504 1.51 1.566c.506.038 1.052.101 1.49.208c.837.205 1.883.716 2.493 1.037l.007.004V7.311a1.044 1.044 0 0 1-.035-.018C10.85 6.971 9.824 6.473 9 6.271c-.444-.109-1-.173-1.513-.21C6.665 6 6 6.673 6 7.496" clip-rule="evenodd" /></svg>
              <Input
                className={clsx(
                  'w-full rounded-lg border-none bg-transparent py-1.5 px-3 text-sm/6 text-white',
                  'focus:outline-none '
                )}
              />
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Reminder</Label>
            <div className='flex mt-3 items-center justify-center gap-2 w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-md text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c4.836 0 8.757-3.884 8.757-8.675c0-4.79-3.92-8.674-8.757-8.674c-4.836 0-8.757 3.883-8.757 8.674C3.243 18.116 7.163 22 12 22m0-13.253c.403 0 .73.324.73.723v3.556l2.218 2.198a.718.718 0 0 1 0 1.022a.735.735 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723M8.24 2.34a.719.719 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.719.719 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.719.719 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.719.719 0 0 1-.233-.996" clip-rule="evenodd" /></svg>
              <DateTimePickerComponent placeholder='Reminder'></DateTimePickerComponent>
            </div>
          </Field>

          <Field>
            <Label className="text-sm/6 font-medium text-white">Description</Label>
            <Description className="text-sm/6 text-white/50">
              Add subtasks as needed.
            </Description>
            <Textarea
              className={clsx(
                'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              rows={3}
            />
          </Field>
        </Fieldset>
      </div>
    </>
  )
}

export default PostFormNote