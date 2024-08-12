"use client";

import React, { useEffect } from "react";
import SubmitButton from "./SubmitButton";
import { Toast, toastHandler } from "./Toast";
import { useScopedI18n } from "@/locales/client";
import { useFormState } from "react-dom";

type Props = {
  formAction: (state: any, formData: FormData) => Promise<any>;
};

const Form = ({ formAction }: Props) => {
  const [state, action] = useFormState(formAction, { error: null });
  const t = useScopedI18n("contactPage");

  useEffect(() => {
    if (!!state.error)
      toastHandler.show({
        type: "error",
        title: t("toast.error.title"),
        message: t("toast.error.message"),
      });

    if (!!state.success) {
      toastHandler.show({
        type: "success",
        title: t("toast.success.title"),
        message: t("toast.success.message"),
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
            placeholder={t("form.name")}
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            className="w-full rounded bg-zinc-900 px-4 py-3"
            placeholder={t("form.email")}
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          className="min-h-[300px] w-full rounded bg-zinc-900 p-4"
          placeholder={t("form.message")}
          required
        />
        <SubmitButton />
      </form>
      <Toast />
    </>
  );
};

export default Form;
