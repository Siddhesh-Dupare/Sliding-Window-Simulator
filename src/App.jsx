import './App.css'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Concept from './pages/Concept';
import GoBackN from './pages/GoBackN';
import SelectiveRepeat from './pages/SelectiveRepeat';
import StopWait from './pages/StopWait';

import RootLayout from './layout/RootLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <RootLayout /> }>
        <Route index element={ <Home /> } />
        <Route path="concept" element={ <Concept /> } />
        <Route path="stop-wait" element={ <StopWait /> } />
        <Route path="go-back-n" element={ <GoBackN /> } />
        <Route path="selective-repeat" element={ <SelectiveRepeat /> } />
      </Route>
    ),
    {
      basename: "/Sliding-Window-Simulator", // Correct place for the basename
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
