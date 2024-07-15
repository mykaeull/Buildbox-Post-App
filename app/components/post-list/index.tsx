import React from "react";
import PostCardContainer from "../post-card-container";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./index.scss";
import toast from "react-hot-toast";

interface PostListData {
    name: string;
    message: string;
    image?: any;
}

interface PostListProps {
    postList: PostListData[];
    setPostList: (value: any) => void;
}

export const PostList = ({ postList, setPostList }: PostListProps) => {
    const handleDeletePost = (index: number) => {
        const newPostList = postList.filter((_, i) => i !== index);
        setPostList(newPostList);
        toast.success("Post deletado com sucesso!");
    };

    return (
        <>
            <span>Feed</span>
            {postList.map((post, i) => (
                <PostCardContainer key={i}>
                    <div className="post-infos-container">
                        <div>
                            <Image
                                src={post.image}
                                alt="Image Preview"
                                className="image-section"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="post-message">
                            <p>{post.message}</p>
                            <div>
                                <span style={{ fontSize: "0.75rem" }}>
                                    Enviado por
                                </span>
                                <br />
                                <span style={{ fontSize: "0.875rem" }}>
                                    {post.name}
                                </span>
                            </div>
                        </div>
                    </div>
                    <IoIosCloseCircleOutline
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontSize: "1.5rem",
                            color: "#9c2b23",
                            cursor: "pointer",
                        }}
                        onClick={() => handleDeletePost(i)}
                    />
                </PostCardContainer>
            ))}
        </>
    );
};
