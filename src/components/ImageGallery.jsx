import {
  Flex,
  Box,
  Spacer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { storage } from "/src/firebase";
import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export default function ImageGallery({ folderName }) {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageRefs = ref(storage, folderName); // get ref to folder
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
      {imageURLs.map((url, index) => (
        <Card>
          <Image
            src={url}
            alt={`Image ${index}`}
            key={index}
            borderRadius="lg"
          />
        </Card>
      ))}
    </div>
  );
}
