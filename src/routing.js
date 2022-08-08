import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import StageProcessing from "./Pages/StageProcessing";
import AdminLayout from "./Pages/Dashboard/AdminLayout";
import ErrorProcessing from "./Components/ErrorProcessing";
import SystemConfig from "./Pages/systemConfig";
import GlAccount from "./Components/GLAccount";
import GLCreation from "./Components/GLCreation";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stage-processing" element={<StageProcessing />} />
        <Route path="/error-processing" element={<ErrorProcessing />} />
        <Route path="/system-config" element={<SystemConfig />} />
        <Route path="/Account-maintenance" element={<GlAccount />} />  
        <Route path="/ACCOUNT-CREATION" element={<GLCreation />} />       
      </Route>
    </Routes>
  );
}

export default Routing;
