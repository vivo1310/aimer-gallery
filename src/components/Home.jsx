// import Header from "/src/components/Header.jsx";
import ImageGallery from "../components/ImageGallery";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageGallery folderName="living-area" />
      {/* TODO: change this to another folder? */}
    </div>
  );
}
