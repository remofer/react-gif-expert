import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories);
    const onAddCategory= (newCategory)=>{

        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])
        console.log(newCategory);
    }        
  return (
    <>
    {/* titulo */}

    <h1>GifExpertApp</h1> 

    {/* input */}
    <AddCategory 
    //setCategories={setCategories}
        onNewCategory={(value)=> onAddCategory(value)}
    />
    {/* Listado de gif */}
    
        {
            categories.map( (category) =>
                (
                    <GifGrid key={category} category={category}/>
                ))
            
        }
        
    {/* Gif item */}
        </>
  )
}
