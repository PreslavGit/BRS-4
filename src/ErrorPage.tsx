import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <div id="error-page" className="w-screen h-screen bg-slate-600 text-white flex flex-col text-3xl items-center justify-center">
        <h1 className="text-5xl pb-12">Oops!</h1>
        <p className="pb-12">This page does not exist</p>
        <Link to={`/`} className="underline text-blue-400">Go to home screen</Link>
      </div>
    );
  }