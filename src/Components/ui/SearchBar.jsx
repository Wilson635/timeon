import React from 'react'

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <div className='w-80 flex items-center rounded-md px-4 bg-white/5 border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white'>
            <input
                type='text'
                placeholder='Search notes'
                className='py-[11px] w-full bg-transparent outline-none text-xs'
                value={value}
                onChange={onChange}
            />

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="7" /><path stroke-linecap="round" d="M11 8a3 3 0 0 0-3 3m12 9l-3-3" /></g></svg>
        </div>
    )
}

export default SearchBar
