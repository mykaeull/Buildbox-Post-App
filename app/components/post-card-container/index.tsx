"use client";

import React from "react";
import "./index.scss";

interface PostCardContainerProps {
    children: React.ReactNode;
}

const PostCardContainer = ({ children }: PostCardContainerProps) => {
    return (
        <div className="post-container">
            <div className="post-content">{children}</div>
        </div>
    );
};

export default PostCardContainer;
