import { CameraIcon, PencilSquareIcon } from "../Icons";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import { TextArea } from "../ui/TextArea";

export function PostUpdate() {
  return (
    <div>
      <Heading level={5}>
        <PencilSquareIcon /> Post an Update
      </Heading>
      <TextArea name="update" placeholder="Who died?" />
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
