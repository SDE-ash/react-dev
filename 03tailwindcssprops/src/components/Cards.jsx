import React from 'react'

function Cards({username="default value"}) {
  return (
    <div>


<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img class="size-12 shrink-0" src="https://www.pexels.com/photo/star-wars-r2-d2-2085831/" alt="ChitChat Logo" />
      <div>
        <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
        <p class="text-gray-500 dark:text-gray-400">{username}</p>
      </div>
    </div>
      
    </div>
  )
}

export default Cards
