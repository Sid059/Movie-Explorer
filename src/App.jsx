import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/AppRoutes';
import { AppProvider } from './context/AppContext';
import './App.css'
//import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner';

function App() {

  return (
    <>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
      {/* <LoadingSpinner /> */}
    </>
  )
}

export default App
