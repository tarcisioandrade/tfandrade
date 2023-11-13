import React, {
  createRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { MailCheck, MailWarning } from "lucide-react";

type ToastProps = {
  title: string;
  message: string;
  type: "error" | "success";
};

type State = {
  config: {
    isVisible: boolean;
  };
  props: ToastProps;
};

type ToastHandler = {
  show: (props: ToastProps, newConfig?: State, time?: number) => Promise<void>;
  hide: () => void;
};

const initialState: State = {
  config: { isVisible: false },
  props: {
    type: "error",
    title: "",
    message: "",
  },
};

const toastRef = createRef<ToastHandler>();

export const toastHandler = {
  show: (props: ToastProps, newConfig?: State, time: number = 3000) =>
    toastRef.current?.show(props, newConfig, time),
  hide: () => toastRef.current?.hide(),
};

export const Toast = () => {
  const [{ config, props }, setState] = useState<State>(initialState);

  const setVisibility = useCallback((isVisible: boolean) => {
    setState((state) => ({
      ...state,
      config: { ...state.config, isVisible },
    }));
  }, []);

  const hide = useCallback(() => {
    setVisibility(false);
  }, [setVisibility]);

  const show = useCallback(
    async (
      props: ToastProps,
      newConfig?: Pick<State, "config">,
      time = 3000,
    ) => {
      if (config.isVisible) return;
      setState({
        props,
        config: { ...newConfig, isVisible: true },
      });
      setTimeout(() => hide(), time);
    },
    [hide, config.isVisible],
  );

  useImperativeHandle(toastRef, () => ({
    hide,
    show,
  }));

  return (
    config.isVisible && (
      <div className="animate-toast-show absolute left-4 right-4 z-[100] rounded bg-zinc-900 p-4 sm:left-1/2 sm:w-fit sm:translate-x-[-50%]">
        <div className="flex items-center gap-2">
          {props.type === "error" ? (
            <MailWarning size={20} strokeWidth={1.5} color="#ef4444" />
          ) : (
            <MailCheck size={20} strokeWidth={1.5} color="#22c55e" />
          )}
          <p>{props.title}</p>
        </div>
        <p className="mt-2 pl-[28px] text-zinc-500">{props.message}</p>
      </div>
    )
  );
};
