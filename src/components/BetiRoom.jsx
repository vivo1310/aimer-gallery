import Header from "/src/components/Header";
import ImageGallery from "./ImageGallery";

export default function BetiRoom() {
  return (
    <div>
      <Header />
      Beti
      <ImageGallery folderName="single-beti" />
    </div>
  );
}
