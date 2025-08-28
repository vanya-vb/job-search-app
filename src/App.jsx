import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Route>
      </Routes>
    </>
  )
}