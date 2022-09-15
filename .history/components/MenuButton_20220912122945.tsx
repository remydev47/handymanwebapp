import React, { useState, Fragment } from 'react'
import { IconButton } from './Button'
import { Transition, Dialog }  from '@headlessui/react';
import Link from 'next/link';
import Logo from './Logo';
import { Button } from './Button';
import { ThemeSelect } from './ThemeToogle';
import { navLinks } from '../constants/constants';

export const MenuPopOver = () => {
    const [isOpen, setIsOpen] = useState(true)
  
    return(
      <div>
        <IconButton 
          variant='ghost' 
          aria-label='menu' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='h-6 w-6 ' fill='none' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </IconButton>
        <Transition 
          show={isOpen}
          appear
          as={Fragment}
          enter='transform transition ease-in-out duration-300'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transform transition ease-in-out duration-300 delay-200'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
         <Dialog 
           as='div'
           className={`fixed inset-0 z-50`}
           onClose={setIsOpen}
           open={isOpen}
           >
           <Transition.Child
             as={Fragment}
             enter='ease-out duration-300 delay-300'
             enterFrom='opacity-0'
             enterTo='opacity-100'
             leave='ease-in duration-200'
             leaveFrom='opacity-100'
             leaveTo='opacity-0'
           >
  
            <Dialog.Overlay 
              className={`fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80`}
             />
          </Transition.Child>
           <div className={styles.dialogcontainer}>
            <a className='mx-auto mt-4 flex w-[140px] '>
              <Logo />
            </a>
            <ul className={`mt-8 space-y-3`}>
              <li className={styles.menuitems}>
                <span className='absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100' />
                <Link href={"/#"}>
                  <a className='w-full font-medium transition-all group-hover:pl-3'>Jobs</a>
                </Link>
              </li>
              <li className={styles.menuitems}>
                <span className='absolute h-full w-2 bg-yellow-700 opacity-0 transition-all group-hover:opacity-100' />
                <Link href={"/#"}>
                  <a className='w-full font-medium transition-all group-hover:pl-3'>Companies</a>
                </Link>
              </li>
            </ul>
            <div className='mt-0 border-t border-gray-200 pt-6 dark:border-gray-200/10'>
              <ThemeSelect />
            </div>
            <ul className='mt-8 space-y-3 border-t border-gray-200 dark:border-gray-200/10'>
              <li>
               <Button fullWidth>
                   Send-Quote
               </Button>
              </li>
             
            </ul>
            <IconButton 
              variant='ghost'
              aria-label='close menu'
              className='absolute top-5 right-5'
              onClick={() => setIsOpen(false)}
            >
              <svg
                viewBox='0 0 10 10'
                className='h-2.5 w-2.5 overflow-visible'
                aria-hidden='true'
              >
                <path
                    d='M0 0L10 10M10 0L0 10'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
              </svg>
            </IconButton>
           </div>
         </Dialog>
        </Transition>
      </div>
    )
  }

const styles ={
    dialogcontainer:`fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-gray-800`,
    menuitems:`group relative flex h-9 items-center oveflow-hidden rounded-md hover:bg-slate-200/50`,
}
  