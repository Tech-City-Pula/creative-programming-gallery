import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <div className="cursor-default">
        <h1 className="text-2xl font-bold">
          Gallery for the Creative Programming Workshop
        </h1>
        <p>
          This is a gallery of creative coding projects made by TCP members in
          the Creative Programming workshop.
        </p>
        <p>
          The workshop source code can be found{" "}
          <a
            className="text-indigo-500 cursor-pointer hover:underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Tech-City-Pula/tcp-kreativno-programiranje"
          >
            here
          </a>
        </p>
        <p>
          Altough in croatian, the video of the workshop can be found on{" "}
          <a
            className="text-indigo-500 cursor-pointer hover:underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=TAQQuqptXMw"
          >
            YouTube
          </a>
        </p>
      </div>

      <div>
        <ImageGallery />
      </div>
    </main>
  );
}
