import React, { useEffect } from 'react'
import { useField } from '@unform/core'

function Input({name}) {
  const {fieldNames, registerField, defaultValue, error} = useField(name)

  useEffect(() => {}, []);

  return (
    <input onChange={(e) => e.target.value} />
  )
}

export default Input