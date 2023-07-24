import { FormEvent, useState } from "react"
import AccoutnForm from "./AccoutnForm"
import AddressForm from "./AddressForm"
import useMultiStepForm from "./useMultiStepForm"
import UserForm from "./UserForm"

type FormData = {
  firstName: string,
  lastName: string,
  age: number,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: 0,
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}


function App() {

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData(prevData => { return { ...prevData, ...fields } })
  }
  const { currentStepIndex, back, next, isFirstStep, isLastStep, step, steps } =
    useMultiStepForm([<UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccoutnForm {...data} updateFields={updateFields} />])

  function onFormSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert('successfully submitted the form')
  }

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '0.5rem',
        fontFamily: 'Arial',
        width: 'max-content'
      }}>
      <form onSubmit={onFormSubmit}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div style={{ display: 'flex', marginTop: '1rem', justifyContent: 'flex-end', gap: '0.5rem' }}>
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  )
}

export default App
