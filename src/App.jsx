import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/AppRoutes';
import { AppProvider } from './context/AppContext';
import './App.css'

function App() {

  return (
    <>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
    </>
  )
}

export default App
