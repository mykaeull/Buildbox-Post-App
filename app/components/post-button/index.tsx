import React, { ButtonHTMLAttributes } from "react";
import "./index.scss";

interface PostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: "primary" | "secondary";
}

export const PostButton = ({
    children,
    color = "primary",
    ...props
}: PostButtonProps) => {
    return (
        <button className={`post-button ${color}`} {...props}>
            {children}
        </button>
    );
};
