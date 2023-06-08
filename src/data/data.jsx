import Room from "/src/components/Room";
import InstagramIcon from "@mui/icons-material/Instagram";
import SvgIcon from "@mui/material/SvgIcon";

export const APP_NAME = "Aimer.dalat";

export const rooms = [
  {
    name: "Single Beti",
    path: "single-beti",
  },
  {
    name: "Single Master",
    path: "master",
  },
  {
    name: "Double Small",
    path: "double-small",
  },
  {
    name: "Double Large",
    path: "double-large",
  },
  {
    name: "Mini House - Single",
    path: "single-mini",
  },
  {
    name: "Mini House - Double",
    path: "double-mini",
  },
  {
    name: "Dorm",
    path: "dorm",
  },
];

// extract only path and element for createBrowserRouter object
export const roomRoutes = rooms.map((item) => {
  return {
    path: item.path,
    element: <Room folderName={item.path} roomName={item.name} />,
  };
});

export const socialMedia = [
  {
    name: "Aimer.dalat",
    icon: (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
      </SvgIcon>
    ),
    path: "https://www.facebook.com/profile.php?id=100086284676047",
  },
  {
    name: "@aimer.dalat",
    icon: (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </SvgIcon>
    ),
    path: "https://www.instagram.com/aimer.dalat/",
  },
  {
    name: "@aimer.dalat",
    icon: (
      <SvgIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
        </svg>
      </SvgIcon>
    ),
    path: "https://www.tiktok.com/@aimer.dalat",
  },
];
