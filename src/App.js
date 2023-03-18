
import { Header, Container, Footer, SectionsTitle } from "./Components/indexCom"
import './App.scss'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container />
        <Footer />
      </Router>

    </>
  )
}

export default App