"use client";

import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div>
      <h3 className="text-xl sm:text-2xl mt-2">Edit Your Profile</h3>
      <form onSubmit={updateUser} className="mb-0 mt-8 max-w-md space-y-4">
        <Input
          name={`name`}
          label={`Name`}
          placeholder={`Enter name`}
          defaultValue={user?.name ?? ""}
        />
        <TextArea
          name={`bio`}
          label={`Bio`}
          columns={30}
          rows={10}
          placeholder={`Enter bio`}
          defaultValue={user?.bio ?? ""}
        />
        <Input
          name={`image`}
          label={`Profile Image URL`}
          placeholder={`Enter image URL`}
          defaultValue={user?.image ?? ""}
        />

        <Button type="submit" color="primary">
          Save
        </Button>
      </form>
    </div>
  );
}
