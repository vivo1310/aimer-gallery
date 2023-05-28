import Header from "/src/components/Header";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageGallery folderName="living-area" />
      {/* TODO: change this to another folder? */}
    </div>
  );
}
