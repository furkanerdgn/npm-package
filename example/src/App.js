import React from 'react'

import { ExampleComponent } from 'furkan-buttons-ui'
import 'furkan-buttons-ui/dist/index.css'

const App = () => {
  return (<>
  <ExampleComponent type="primary" text="Primary" />
  <ExampleComponent type="light" text="Light" />
  <ExampleComponent type="dark" text="Dark" />
  <ExampleComponent type="dashed" text="Dashed" />
  </>
  )
}

export default App
