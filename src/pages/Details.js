import React, { useState } from 'react'

import {useParams } from 'react-router-dom'
const Details = ({ blog }) => {
  const { id } = useParams();

  const article = blog.filter((item) => {
  
    return item.id === Number(id)
  })
  console.log(article)

  

  return (
    <div className='details'>
      {
        article.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <article>{item.details}</article>
              <p>written by <blockquote>{item.author }</blockquote></p>

</div>          )
        })
}

    </div>
  )
}

export default Details