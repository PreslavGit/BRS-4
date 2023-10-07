import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <div id="error-page" className="w-screen h-screen text-black flex flex-col text-3xl items-center justify-center">
        <p className="text-5xl pb-12 text-center">Не е намерена такава страница</p>
        <Link to={`/`} className="underline text-blue-400 text-center">Обратно към началото</Link>
      </div>
    );
  }