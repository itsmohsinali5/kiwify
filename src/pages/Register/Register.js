import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data", data);
  };

  return (
    <div id="__nuxt">
      <div id="__layout">
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
                alt="Kiwify"
                className="mx-auto h-12 w-auto"
              />
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {" "}
                Criar nova conta{" "}
              </h2>
              <p className="mt-2 text-center text-base leading-5 text-gray-600">
                {" "}
                Ou{" "}
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  {" "}
                  entrar na sua conta existente{" "}
                </a>
              </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              >
                <div>
                  <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                    {" "}
                    E-mail{" "}
                  </label>
                  <div>
                    <input
                      type="email"
                      autoComplete="email"
                      name="null"
                      {...register("email", {
                        required: "Esse campo é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "O e-mail deve ser válido",
                        },
                      })}
                      className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                        errors?.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors?.email && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors?.email.message}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                    {" "}
                    Repetir e-mail{" "}
                  </label>
                  <div>
                    <input
                      type="email"
                      autoComplete="repeat-email"
                      name="null"
                      {...register("repeatEmail", {
                        required: "Esse campo é obrigatório",
                        validate: (value) => {
                          if (value !== watch("email")) {
                            return "Os dois e-mails devem ser iguais.";
                          }
                          return true;
                        },
                      })}
                      className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                        errors?.repeatEmail ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors?.repeatEmail && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors?.repeatEmail?.message}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    {" "}
                    Senha{" "}
                  </label>
                  <div>
                    <input
                      type="password"
                      autoComplete="password"
                      name="null"
                      {...register("password", {
                        required: "Esse campo é obrigatório",
                      })}
                      className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                        errors?.password ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors?.password && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors?.password.message}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <label className="relative flex items-start mt-2">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        {...register("checkbox", {
                          required: "Esse campo é obrigatório",
                        })}
                        className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ${
                          errors?.checkbox ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    <div className="ml-2 text-sm leading-5">
                      <span className="font-medium text-gray-700">
                        Eu li e aceito os{" "}
                        <a
                          href="https://kiwify.com.br/termos-de-uso"
                          rel="noreferrer noopener"
                          className="underline"
                        >
                          {" "}
                          termos de uso
                        </a>
                        ,{" "}
                        <a
                          href="https://kiwify.com.br/licenca-de-uso-software"
                          rel="noreferrer noopener"
                          className="underline"
                        >
                          {" "}
                          termos de licença de uso de software
                        </a>
                        ,{" "}
                        <a
                          href="https://kiwify.com.br/politica-de-conteudo"
                          rel="noreferrer noopener"
                          className="underline"
                        >
                          {" "}
                          política de conteúdo
                        </a>{" "}
                        da Kiwify{" "}
                      </span>
                    </div>
                  </label>
                  {errors?.checkbox && (
                    <div className="mt-2 text-sm text-red-500">
                      {errors?.checkbox.message}
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                      {" "}
                      Criar conta{" "}
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
