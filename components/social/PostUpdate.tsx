import { useState, useEffect } from "react";
import { CameraIcon, PencilSquareIcon } from "../Icons";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import { TextArea } from "../ui/TextArea";

const prompts = [
  "Who died?",
  "What is your blood pressure?",
  "What are you wearing?",
  "What did you do today?",
  "Where are you right now?",
];

export function PostUpdate() {
  const timeoutMinutes = 1;

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

  return (
    <div>
      <Heading level={5}>
        <PencilSquareIcon /> Post an Update
      </Heading>
      <TextArea name="update" placeholder={placeholder} />
      <div className="flex w-full justify-end space-x-3 mt-1">
        <Button>
          <CameraIcon /> Add Photo
        </Button>
        <Button type="submit" intent="primary">
          <PencilSquareIcon /> Post
        </Button>
      </div>
    </div>
  );
}
