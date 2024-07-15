"use client";

import React, { useState } from "react";
import "./index.scss";
import { PostInput } from "../post-input";
import { PostTextArea } from "../post-textarea";
import ImageUpload from "../image-upload";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PostCardContainer from "../post-card-container";
import { PostButton } from "../post-button";
import { PostList } from "../post-list";
import toast from "react-hot-toast";

const postSchema = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    message: yup.string().required("campo obrigatório"),
});

interface PostFormData {
    name: string;
    message: string;
    image?: File | string | null;
}

interface PostFormProps {
    setPostList: (value: any) => void;
    postList: PostFormData[];
}

const PostForm = ({ setPostList, postList }: PostFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, isValid },
    } = useForm<PostFormData>({
        resolver: yupResolver(postSchema),
        mode: "onChange",
    });

    const [resetKey, setResetKey] = useState<string>(new Date().toISOString());
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const onSubmit = async (data: PostFormData) => {
        // console.log(data);
        const dataFormated = {
            name: data.name,
            message: data.message,
            image: imagePreview,
        };
        setPostList([...postList, dataFormated]);
        reset();
        setResetKey(new Date().toISOString());
        toast.success("Post criado com sucesso!");
    };

    const nameValue = watch("name", "");
    const messageValue = watch("message", "");
    const imageValue = watch("image", null);

    const handleImageSelect = (file: File) => {
        setValue("image", file);
        const objectUrl = URL.createObjectURL(file);
        setImagePreview(objectUrl);
    };

    const isFormValid = nameValue && messageValue && imageValue && isValid;

    const handleReset = () => {
        reset();
        setResetKey(new Date().toISOString());
    };

    const resetImageField = () => {
        setValue("image", null);
        setResetKey(new Date().toISOString());
    };

    return (
        <PostCardContainer>
            <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
                <ImageUpload
                    onImageSelect={handleImageSelect}
                    resetKey={resetKey}
                    resetImageField={resetImageField}
                />
                <PostInput
                    placeholder="Digite seu nome"
                    value={nameValue}
                    {...register("name")}
                />
                <PostTextArea
                    placeholder="Mensagem"
                    value={messageValue}
                    {...register("message")}
                />
                <div className="footer-form">
                    <PostButton
                        type="button"
                        color="secondary"
                        onClick={handleReset}
                    >
                        Descartar
                    </PostButton>
                    <PostButton type="submit" disabled={!isFormValid}>
                        Confirmar
                    </PostButton>
                </div>
            </form>
        </PostCardContainer>
    );
};

export default PostForm;
