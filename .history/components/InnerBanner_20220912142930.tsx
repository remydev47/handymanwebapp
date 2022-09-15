import React, {} from 'react'
import { Transition, Dialog} from '@headlessui/react'
import { IconButton } from './Button';

export const InnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({ show, onClose,}) => {
    return(
        <Transition
         show={show}
         enter="transition-opacity duration-75"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="transition-opacity duration-150"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
        >
        <div className={styles.mainBanner}>
            <p>
                Welcome to <span className='font-bold'>HIREDLA</span>. An easier and 
                faster job discovery Platform
            </p>
            <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
          </span>
         </div>
        </Transition>
    )
}

const styles ={
    mainBanner:`relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-white shadow-lg md:rounded-full`,
    formcontainer:`flex items-center overflow-hidden rounded-full bg-white shadow-md 
                    group-focus-within:ring-2 group-focus-within:ring-indigo-400 
                    group-focus-within:ring-offset-2 
                    group-focus-within:ring-offset-transparent`,
}
