import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <div>Hello from about</div>
      <Link to="us">Friend</Link><Outlet />
    </>
  )
}