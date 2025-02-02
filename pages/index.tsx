import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: false, password: false });

  function changeCredentials(param:string, value:any) {
    setCredentials((prev) => ({ ...prev, [param]: value.target.value }));
    setErrors((prev) => ({ ...prev, [param]: value.target.value.trim() === "" }));
  }

  function checkFildsIsEmpty(){
    let newErrors = {
      name: credentials.name.trim() === "",
      password: credentials.password.trim() === "",
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.password) {
      console.log(credentials);
    }
  }

  function onClickButton() {
    checkFildsIsEmpty()
    // ==============================
    // ******************************
    // Adicione aqui sua autenticacao
    // ******************************
    const {name,password} = credentials
    // 
  }

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center w-[100%] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:py-10 sm:px-3 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login to your account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[100%]">
        <div className="flex flex-col m-auto w-[100%] max-w-[700px] h-[500px] bg-[#F9FAFC] shadow-lg rounded-2xl md:max-w-[100%] sm:h-[430px]">
          <div className="m-auto mt-0 bg-[#FFFFFF] w-[100%] h-[40%] rounded-t-2xl shadow-sm flex flex-col sm:h-[30%]">
            <h1 className="m-auto mb-0 text-3xl font-semibold sm:text-2xl">Sign In</h1>
            <span className="m-auto mt-3 text-lg opacity-65 sm:text-sm sm:mt-0">Use your email and password to sign in</span>
          </div>
          <div className="flex flex-col h-[100%] w-[100%] px-20 lg:px-10">
            <h1 className="m-auto mb-1 ml-0 opacity-65 sm:text-sm">EMAIL ADRESS</h1>
            <input type="email" className={`m-auto mt-0 mb-0 w-[100%] h-14 rounded-lg ${errors.name?"border-red-500":"border-gray-200"} border-2 px-5 sm:h-12`} placeholder="user@email.com" onChange={(e)=>changeCredentials('name',e)}/>
            {errors.name && <span className="text-red-500 text-sm mt-1">Email is required</span>}
            
            <div className="h-5"></div>
            <h1 className="m-auto mt-0 mb-1 ml-0 opacity-65 sm:text-sm">PASSWORD</h1>
            <input type="password" className={`m-auto mt-0 mb-0 w-[100%] h-14 rounded-lg ${errors.password?"border-red-500":"border-gray-200"}  border-2 px-5 sm:h-12`} placeholder="" onChange={(e)=>changeCredentials('password',e)}/>
            {errors.password && <span className="text-red-500 text-sm mt-1">Password is required</span>}
            <div className="h-5"></div>
            <button className="align-middle items-center w-[100%] h-14 border-2 border-gray-200 rounded-md mt-0" onClick={()=>onClickButton()}>
              Sign in
            </button>
            <div className="h-1"></div>
            <span className="m-auto"></span>
            </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marco0antonio0/loginPageExample"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Desenvolvido por @marco0antonio0
        </a>
        
      </footer>
    </div>
  );
}
