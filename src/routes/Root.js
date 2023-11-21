import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            {/* <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
