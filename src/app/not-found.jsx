import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Not Found 404</h1>
      <Link href="/">
        <h1 className="text-2xl font-bold text-blue-500">Go Home</h1>
      </Link>
    </div>
  );
};

export default NotFound;
