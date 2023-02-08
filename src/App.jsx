import 'bootswatch/dist/litera/bootstrap.min.css'
import StagiaireList from "./components/StagiaireList"
import AddStagiaire from "./components/AddStagiaire"
function App() {

  return (
    <div className='container py-4'>
      <AddStagiaire />
      <StagiaireList />
    </div>
  )
}

export default App
