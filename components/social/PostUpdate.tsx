"use client";

import { useState, useEffect } from "react";
import { CameraIcon, PencilSquareIcon } from "../Icons";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import { TextArea } from "../ui/TextArea";

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

export function PostUpdate({ apiUrl, initialContent = "" }: PostUpdateProps) {
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

    await fetch(`${apiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postContent }),
    });

    setPostContent("");
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
      </div>
    </div>
  );
}
