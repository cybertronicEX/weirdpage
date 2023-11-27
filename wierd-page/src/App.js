
import { Route, Routes } from "react-router-dom";
import Main from "./subpages/Main";
import Where from "./subpages/Where";
import RSVP from "./subpages/Rsvp";
import Jayathu from "./subpages/jayathu";


export default function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/where" element={<Where />} />
        <Route path="/rsvp/:name" element={<RSVP />} />
        <Route path="/jayathu" element={<Jayathu />} />
      </Routes>
    </>
  );
}