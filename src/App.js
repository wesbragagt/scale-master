import React from 'react'
import Select from 'react-select'
import scales from './scales.json'

//  ADD WAY TO CAPITALIZE EACH LETTER SEPARATED BY -
//  ADD SCALE DIAGRAMS FOR THE CAGED SYSTEM
//  ADD A CHORDS THAT EACH SCALE MIGHT WORK

const options = Object.entries(scales).map(scale => {
  const [label, value] = scale
  return { label, value }
})

function App () {
  const [state, setState] = React.useState({ label: '', value: [] })

  function onChangeHandler (selectedScale) {
    setState(selectedScale)
  }
  return (
    <div>
      <h1>Welcome to Scale master</h1>
      <h2>Type the scale you are looking for</h2>
      <Select options={options} onChange={onChangeHandler} />
      <main>
        <h2>Result: </h2>
        {state.label ? (
          <div>
            <h3>{state.label}</h3>
            <div>{state.value.join(' ')}</div>
          </div>
        ) : (
          <span>scale not found</span>
        )}
        <h2>Diagrams: </h2>
      </main>
    </div>
  )
}

export default App
