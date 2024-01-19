import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-3xl">NextCRUD</h3>
        </Link>

        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link
              href="/new"
              className="bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700"
            >
              New Task
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
