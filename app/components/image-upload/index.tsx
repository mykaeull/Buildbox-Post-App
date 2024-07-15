"use client";

import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { GrGallery } from "react-icons/gr";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface ImageUploadProps {
    onImageSelect: (file: File) => void;
    resetKey: string;
    resetImageField?: any;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onImageSelect,
    resetKey,
    resetImageField,
}) => {
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setPreview(null);
    }, [resetKey]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setPreview(reader.result as string);
            // };
            // reader.readAsDataURL(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            onImageSelect(file);
        } else {
            alert("Please select an image file (png or jpg).");
        }
    };

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="image-upload-container">
            <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: "none" }}
            />
            <div
                className="image-upload-placeholder"
                onClick={handleDivClick}
                style={{ border: preview ? "none" : "1px solid gray" }}
            >
                {preview ? (
                    <div className="image-preview-container">
                        <Image
                            src={preview}
                            alt="Image Preview"
                            className="image-preview"
                            width={100}
                            height={100}
                            // style={{ borderRadius: 42 }}
                        />
                        <MdOutlineDeleteOutline
                            className="trash-icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                resetImageField();
                            }}
                        />
                    </div>
                ) : (
                    <div className="image-upload-icon">
                        <GrGallery />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
