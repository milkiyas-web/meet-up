"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const onboarding = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/main')
  }
  return (
    <>
      <div className="grid space-y-2 justify-center items-center mt-10">
      
        <h1 className='font-bold text-lg'>I am a </h1>
        <div className='flex flex-row space-x-16 mt-10'>
          <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-rose-500 dark:checked:border-rose-500 dark:focus:ring-offset-gray-800" id="hs-vertical-checkbox-in-form"/>
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Man</span>
          </label>

          <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="vertical-checkbox-checked-in-form" />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Woman</span>
          </label>
        </div>
        <h1 className='font-bold text-lg mt-8'>Your interests</h1>
        <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
        <div className='flex flex-row space-x-16 mt-10'>
          <div className='flex flex-col space-y-4 mt-8'>
            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-rose-500 dark:checked:border-rose-500 dark:focus:ring-offset-gray-800" id="hs-vertical-checkbox-in-form"/>
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Sports</span>
            </label>

            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="vertical-checkbox-checked-in-form" />
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Movie night</span>
            </label>
            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-rose-500 dark:checked:border-rose-500 dark:focus:ring-offset-gray-800" id="hs-vertical-checkbox-in-form"/>
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Anime</span>
            </label>

            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="vertical-checkbox-checked-in-form" />
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Study</span>
            </label>
          </div>
          <div className='flex flex-col space-y-4 mt-8'>
            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-rose-500 dark:checked:border-rose-500 dark:focus:ring-offset-gray-800" id="hs-vertical-checkbox-in-form"/>
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Traveling</span>
            </label>

            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="vertical-checkbox-checked-in-form" />
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Music</span>
            </label>
            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-rose-500 dark:checked:border-rose-500 dark:focus:ring-offset-gray-800" id="hs-vertical-checkbox-in-form"/>
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Games</span>
            </label>

            <label className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-rose-500 focus:ring-rose-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="vertical-checkbox-checked-in-form" />
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Drink</span>
            </label>
          </div>
          
        </div>
        <div className="flex flex-col justify-center gap-4 items-center">
            <button onClick={handleClick} className="bg-rose-500 text-white rounded-md w-80 h-9 px-3">Continue</button>
           
          </div>
      </div>
    </>
  )
}

export default onboarding