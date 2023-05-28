import { Flex, Box, Spacer } from "@chakra-ui/react";
import { storage } from "/src/firebase";
import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import Header from "./components/Header";

export default function Home() {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageRefs = ref(storage, "single-beti"); // get ref to images folder
      listAll(imageRefs).then(async (res) => {
        // get all urls in the folder
        const urls = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setImageURLs(urls);
      });
    };
    fetchImages();
  }, []);
  return (
    <div>
      <Header />
      beti room
      {imageURLs.map((url, index) => (
        <img src={url} alt={`Image ${index}`} key={index} />
      ))}
    </div>
  );
}
