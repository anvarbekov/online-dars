import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-container px-4">
        <Outlet />
      </main>
    </>
  );
}
