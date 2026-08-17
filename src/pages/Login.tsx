import logo from "@/assets/logo.png";
import LoginForm from "@/Features/Auth/components/LoginForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <main className="h-screen flex flex-col bg-linear-to-br from-primary-50 via-white to-primary-100/60 px-5 py-5 md:px-10 md:py-6">
      <header className="10 mx-auto flex w-full max-w-270 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shefaa logo" className="size-10" />
          <span className="text-[25px] font-semibold text-primary-700">
            Shefaa
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] font-extrabold text-neutral-600 transition-colors hover:text-primary-700"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
      </header>
      <div className="w-full flex flex-1 items-center justify-center">
        <section className=" w-full flex  items-center justify-center">
          <div className="w-full max-w-112.5 rounded-lg border border-primary-200 bg-white p-6 md:p-8">
            <p className="text-[11px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
              Sign in
            </p>
            <h1 className="mt-2 text-[25px] leading-tight font-extrabold text-neutral-900 md:text-[29px]">
              Welcome back to Shefaa
            </h1>
            <p className="mt-2 text-[12px] leading-relaxed font-medium text-neutral-500">
              Enter your details to continue to your account.
            </p>

            <LoginForm />

            <p className="mt-5 flex items-center justify-center gap-1 text-[12px] font-medium text-neutral-500">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="inline-flex items-center gap-1 font-extrabold text-primary-700 hover:text-primary-500"
              >
                Register
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
