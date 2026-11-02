import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/examples/Examples.jsx';

export default App;

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}
