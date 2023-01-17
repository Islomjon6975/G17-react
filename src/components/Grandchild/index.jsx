import React, { memo } from 'react'

export const GrandChild = memo(() => {
  console.log('GrandChild Component')

  return (
    <div>GrandChild</div>
  )
})
