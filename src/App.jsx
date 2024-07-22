// App.jsx
import { RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import STEP1 from "./pages/STEP1.jsx";
import STEP2 from "./pages/STEP2.jsx";
import STEP3 from "./pages/STEP3.jsx";
import STEP4 from "./pages/STEP4.jsx";
import Erori from "./pages/Erori.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import { StepperProvider } from "./pages/context/StepperContext.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="STEP1" element={<STEP1 />} />
      <Route path="STEP2" element={<STEP2 />} />
      <Route path="STEP3" element={<STEP3 />} />
      <Route path="STEP4" element={<STEP4 />} />
      <Route path="thankyou" element={<ThankYou />} />
      <Route path="*" element={<Erori />} />
    </Route>
  )
);

function App() {
  return (
    <StepperProvider>
      <RouterProvider router={Router} />
    </StepperProvider>
  );
}

export default App;
