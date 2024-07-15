"use client";

import {
    TextareaHTMLAttributes,
    useState,
    forwardRef,
    useContext,
} from "react";
import "./index.scss";

interface PostTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder?: string;
    value?: string;
}

export const PostTextArea = forwardRef<HTMLTextAreaElement, PostTextAreaProps>(
    ({ placeholder, value, onFocus, onBlur, onChange, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
            setIsFocused(true);
            if (onFocus) onFocus(event);
        };

        const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
            setIsFocused(false);
            if (onBlur) onBlur(event);
        };

        return (
            <div className="postTextAreaContainer">
                <textarea
                    className="postTextArea"
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

PostTextArea.displayName = "PostTextArea";
