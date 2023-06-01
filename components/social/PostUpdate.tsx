"use client";

import { useState, useEffect } from "react";
import { CameraIcon, PencilSquareIcon } from "../Icons";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import { TextArea } from "../ui/TextArea";
import { Toast, ToastProps } from "../ui/Toast";

export interface PostUpdateProps {
  apiUrl: string;
  initialContent?: string;
}

const prompts = [
  "Who died?",
  "What is your blood pressure?",
  "What are you wearing?",
  "What did you do today?",
  "Where are you right now?",
];
const timeoutMinutes = 1;
const toastSuccess: ToastProps = {
  title: `Success!`,
  description: `Your post was saved.`,
  intent: `success`,
  trigger: 0,
};
const toastError: ToastProps = {
  title: `Error!`,
  description: `Your post was not saved.`,
  intent: `danger`,
  trigger: 0,
};

export function PostUpdate({ apiUrl, initialContent = "" }: PostUpdateProps) {
  const [toast, setToast] = useState({
    ...toastSuccess,
    trigger: 0,
  });
  const [postContent, setPostContent] = useState(initialContent);
  const [isPosting, setIsPosting] = useState(false);
  const [placeholder, setPlaceholder] = useState(() => {
    return prompts[Math.floor(Math.random() * prompts.length)];
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setPlaceholder(() => {
        return prompts[Math.floor(Math.random() * prompts.length)];
      });
    }, timeoutMinutes * 60 * 1000);

    // Clean up function
    return () => {
      clearInterval(timerId);
    };
  }, [timeoutMinutes]);

  const handleClick = async () => {
    setIsPosting(true);

    const response = await fetch(`${apiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postContent }),
    });

    if (response.status === 201) {
      setPostContent("");
      setToast({ ...toastSuccess, trigger: toast.trigger + 1 });
    } else {
      setToast({ ...toastError, trigger: toast.trigger + 1 });
    }

    setIsPosting(false);
  };
  const handleUpdate = (value: string) => setPostContent(value);

  return (
    <div>
      <Heading level={5}>
        <PencilSquareIcon /> Post an Update
      </Heading>
      <TextArea
        name="update"
        placeholder={placeholder}
        value={postContent}
        onChange={handleUpdate}
      />
      <div className="flex w-full justify-end space-x-3 mt-1">
        <Button>
          <CameraIcon /> Add Photo
        </Button>
        <Button type="submit" intent="primary" disabled={isPosting} onClick={() => handleClick()}>
          <PencilSquareIcon /> Post
        </Button>
        <Toast {...toast} />
      </div>
    </div>
  );
}
