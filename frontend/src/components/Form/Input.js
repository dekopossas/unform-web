import React from 'react'
import { useField } from '@unform/core'

function Input({name}) {

  const field = useField(name)

  return (
    <div>Input</div>
  )
}

export default Input