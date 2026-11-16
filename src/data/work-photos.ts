import devicePhoto from "@/assets/work-device-demonstration.jpeg.asset.json";
import sessionPhoto from "@/assets/work-hands-on-session.jpeg.asset.json";
import speakingPhoto from "@/assets/work-speaking.jpeg.asset.json";

interface WorkPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const workPhotos: WorkPhoto[] = [
  {
    id: "device-demonstration",
    src: devicePhoto.url,
    alt: "Fedelika showing an orange electronic device to two participants.",
    title: "Sharing what I’m building.",
    caption: "I bring my work into conversations through hands-on demonstrations.",
  },
  {
    id: "hands-on-session",
    src: sessionPhoto.url,
    alt: "Fedelika working with participants beside a laptop while holding an electronic device.",
    title: "Exploring ideas together.",
    caption: "I enjoy working alongside others, connecting hardware, ideas, and practical learning.",
  },
  {
    id: "speaking",
    src: speakingPhoto.url,
    alt: "Fedelika speaking into a microphone at an event, wearing an orange jacket.",
    title: "Taking the conversation further.",
    caption: "I share my perspective and connect with people through technology conversations.",
  },
];