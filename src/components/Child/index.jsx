import React, { memo, useState } from 'react'

export const Child = memo((prop) => {
  console.log('Child Component')

  return (
    <div>
      <h2>Child </h2>
      <p>{prop.title}</p>
      <p>{prop.data.name} {prop.data.address}</p>
      <p>{prop.usecall('hi from child').name}</p>
    </div>
  )
})
