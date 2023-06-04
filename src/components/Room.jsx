import ImageGallery from "./ImageGallery";

export default function Room({ folderName, roomName }) {
  return (
    <div>
      {roomName}
      <ImageGallery folderName={folderName} />
    </div>
  );
}
