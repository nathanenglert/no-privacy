export const dynamic = "force-static";

import PageGrid from "@/components/PageGrid";
import TitleAndDescLayout from "@/components/TitleAndDescLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "We are the bees knees.",
};

export default async function AboutPage() {
  return (
    <TitleAndDescLayout
      name="What makes us special"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
    >
      <PageGrid>
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-300 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

            <p className="mt-1 text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
              possimus quisquam reiciendis tempora animi! Quaerat, saepe?
            </p>
          </div>
        </div>
      </PageGrid>
    </TitleAndDescLayout>
  );
}
