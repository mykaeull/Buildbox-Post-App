"use client";

import { Toaster as ToasterProvider, ToastOptions } from "react-hot-toast";

const toastOptions: ToastOptions = {
    style: {
        backgroundColor: "#65a308",
        color: "#fff",
    },
    position: "top-center",
};

export const Toaster = () => {
    return <ToasterProvider toastOptions={toastOptions} />;
};
