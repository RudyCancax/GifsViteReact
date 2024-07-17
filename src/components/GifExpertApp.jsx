import { useState } from 'react';

import { AddCategory, GifGrid } from './index';
import { ReactImage, RightArrow, GifImage } from './../assets/index';
import ViteImage from './../../public/vite.svg';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['hxh']);

  const onAddCategory = ( newCategory )=>{
    if( categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories ]);
  }

  return (
    <>
      <div className='flex items-center justify-center text-center'>
        <img src={ViteImage} className='w-32 h-32 mb-4 mx-4' />
        <img src={RightArrow} className='w-32 h-32 mb-4 mx-4' />
        <img src={ReactImage} className='w-32 h-32 mb-4 mx-4' />
        <img src={RightArrow} className='w-32 h-32 mb-4 mx-4' />
        <img src={GifImage} className='w-32 h-32 mb-4 mx-4 text-white' />
      </div>
        <h1 className="text-3xl text-white font-bold mb-4 w-full text-center">GIFs</h1>
      
      <AddCategory
        onNewCategory={ onAddCategory }>
      </AddCategory>

      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }

    </>
  )
}