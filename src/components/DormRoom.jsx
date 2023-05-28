import Header from "/src/components/Header";
import ImageGallery from "./ImageGallery";

export default function DormRoom() {
  return (
    <div>
      <Header />
      <ImageGallery folderName="dorm" />
    </div>
  );
}
