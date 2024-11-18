import Homepage from "./pages/homepage"
import { Analytics } from '@vercel/analytics/react';
function App() {

  return (
    <>
      <Analytics />
      <Homepage />
    </>
    
  )
}

export default App
