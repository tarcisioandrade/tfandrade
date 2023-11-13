"use client";

import React, { useEffect } from "react";
import SubmitButton from "./SubmitButton";
import { Toast, toastHandler } from "./Toast";
import { useFormState } from "react-dom";

type Props = {
  formAction: (state: any, formData: FormData) => Promise<any>;
};

const Form = ({ formAction }: Props) => {
  const [state, action] = useFormState(formAction, { error: null });

  useEffect(() => {
    if (!!state.error)
      toastHandler.show({
        type: "error",
        title: "Mensagem não enviada",
        message: "Alguma coisa aconteceu, por favor, tente novamente.",
      });

    if (!!state.success) {
      toastHandler.show({
        type: "success",
        title: "Mensagem enviada",
        message:
          "Obrigado por entrar em contato! Responderei o mais rápido possivel.",
      });
    }
  }, [state]);

  return (
    <>
      <form className="flex flex-col gap-4" action={action}>
        <div className="flex items-center gap-4">
          <input
            id="name"
            type="text"
            name="name"
            className="w-full rounded bg-zinc-900 px-4 py-3"
            placeholder="Nome"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            className="w-full rounded bg-zinc-900 px-4 py-3"
            placeholder="E-mail"
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          className="min-h-[300px] w-full rounded bg-zinc-900 p-4"
          placeholder="Mensagem"
          required
        />
        <SubmitButton />
      </form>
      <Toast />
    </>
  );
};

export default Form;
