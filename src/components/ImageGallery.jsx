// import { Box, SimpleGrid } from "@chakra-ui/react";
import { Box } from "@mui/material";
import { storage } from "/src/firebase";
import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <Box>
      {imageURLs.map((url, index) => (
        <Box>
          <LazyLoadImage alt={`Image ${index}`} src={url} effect="blur" />
        </Box>
      ))}
    </Box>
  );
}
