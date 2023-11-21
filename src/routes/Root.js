import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="favorites">Favorites</Link></li>
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
