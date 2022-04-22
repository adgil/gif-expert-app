import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];  //categories

    const [categories, setCategories] = useState(['Hello']);
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
                { 
                    categories.map( category => (
                    <GifGrid                     
                        key={ category }                    
                        category={ category }
                        />
                    ))
                }
        </>
    )
}
