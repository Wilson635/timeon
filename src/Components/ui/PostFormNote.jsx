import { Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import React from 'react'
import clsx from 'clsx'

const PostFormNote = () => {


  return (
    <>
      <div className="w-full max-w-lg px-4 mt-5">
        <Fieldset className="space-y-6">
          <Field>
            <Label className="text-sm/6 font-medium text-white h3-bold md:h2-bold w-full">Title</Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">Delivery notes</Label>
            <Description className="text-sm/6 text-white/50">
              If you have a tiger, we'd like to know about it.
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