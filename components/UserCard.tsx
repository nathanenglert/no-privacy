import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
  bio: string | null;
}

export default function UserCard({ id, name, image, bio }: Props) {
  return (
    <Link href={`/users/${id}`} className="group relative block bg-black">
      <img
        alt="Developer"
        src={image ?? "/default-avatar.webp"}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          {bio && (
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic
                asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum.
                Repudiandae?
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
