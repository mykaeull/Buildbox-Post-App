"use client";

import React, { useState } from "react";
import PostForm from "./components/post-form";
import { PostList } from "./components/post-list";
import "./page.scss";

interface PostFormData {
    name: string;
    message: string;
    image?: File | string | null;
}

export default function Home() {
    const [postList, setPostList] = useState<PostFormData[]>([]);

    return (
        <main>
            <PostForm postList={postList} setPostList={setPostList} />
            <div className="post-list">
                {postList.length !== 0 && (
                    <PostList postList={postList} setPostList={setPostList} />
                )}
            </div>
        </main>
    );
}
