"use client";

import { InputHTMLAttributes, useState, forwardRef, useContext } from "react";
import "./index.scss";

interface PostInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    value?: string;
}

export const PostInput = forwardRef<HTMLInputElement, PostInputProps>(
    ({ placeholder, value, onFocus, onBlur, onChange, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(true);
            if (onFocus) onFocus(event);
        };

        const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            setIsFocused(false);
            if (onBlur) onBlur(event);
        };

        return (
            <div className="postInputContainer">
                <input
                    className="postInput"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    placeholder={isFocused ? "" : placeholder}
                    {...props}
                />
            </div>
        );
    }
);

PostInput.displayName = "PostInput";
