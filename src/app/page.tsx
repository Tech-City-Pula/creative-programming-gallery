import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-4">
      <div>
        <h1 className="text-2xl font-bold">
          Gallery for the Creative Programming Workshop
        </h1>
        <p>
          This is a gallery of creative coding projects made by TCP members in
          the Creative Programming workshop.
        </p>
      </div>

      <div>
        <ImageGallery />
      </div>
    </main>
  );
}
