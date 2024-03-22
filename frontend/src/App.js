import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout/RootLayout";
import Homepage from "./Components/HomePage/HomePage";
import CampaignEnrollment from "./Components/Enrollment/CampaignEnrollment/CampaignEnrollmentForm";

// import CampaignEnrollmentForm from './Components/CampaignEnrollmentForm';

function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "create-campaign",
          element: <CampaignEnrollment />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
