import { Box, SimpleGrid } from "@chakra-ui/react";
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
    <Box p={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {imageURLs.map((url, index) => (
          <Box key={index} borderRadius="lg">
            <LazyLoadImage alt={`Image ${index}`} src={url} effect="blur" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
