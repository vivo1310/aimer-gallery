import Header from "/src/components/Header";
import ImageGallery from "./ImageGallery";

export default function MasterRoom() {
  return (
    <div>
      <Header />
      <ImageGallery folderName="master" />
    </div>
  );
}
