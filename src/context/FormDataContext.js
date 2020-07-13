import { message } from 'antd'
import React, { useState, useContext, createContext } from 'react'
// import { getLocalStorage } from '../utils'

const FormDataContext = createContext('')

export const useFormDataContext = () => useContext(FormDataContext)

function FormDataProvider({ children }) {
  const [userData, setUserData] = useState({})
  const [payMethod, setPayMethod] = useState(2)
  const [stepCurrent, setStepCurrent] = useState(1)

  const nextStep = () => {
    const aux = stepCurrent + 1
    setStepCurrent(aux)
  }

  const prevStep = () => {
    const aux = stepCurrent - 1
    setStepCurrent(aux)
  }

  const submitData = (data) => {
    message.success('Processing complete!')
    console.log(data)
  }

  // useEffect(() => {
  //   setProfileData(getLocalStorage('githubProfile') || {})
  // }, [])

  return (
    <FormDataContext.Provider
      value={{
        userData,
        setUserData,
        payMethod,
        setPayMethod,
        stepCurrent,
        setStepCurrent,
        nextStep,
        prevStep,
        submitData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}

export default FormDataProvider
