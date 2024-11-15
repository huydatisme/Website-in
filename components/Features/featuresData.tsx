import { Feature } from "@/types/feature";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/Tem/1.png" // Replace with the correct path to your SVG file
        alt="description of the image"
        width={250}
        height={250}
      />
    ),
    title: "Tem chống hàng giả",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/Tem/2.png" // Replace with the correct path to your SVG file
        alt="description of the image"
        width={250}
        height={250}
      />
    ),
    title: "Tem bảy màu",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/Tem/3.png" // Replace with the correct path to your SVG file
        alt="description of the image"
        width={250}
        height={250}
      />
    ),
    title: "Tem nhãn decal",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/Card-01.jpg" // Replace with the correct path to your SVG file
        alt="description of the image"
        width={250}
        height={250}
      />
    ),
    title: "In Name Card",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/products/catalogue-01.jpg" // Replace with the correct path to your SVG file
        alt="description of the image"
        width={250}
        height={250}
      />
    ),
    title: "In Catalogue",
  },
  {
    id: 1,
    icon: (
      <Image
  src="/images/products/phongbi/phongbi1.png"  // Replace with the correct path to your SVG file
  alt="description of the image"
  width={250} 
  height={250}
/>
    ),
    title: "In phong bì",
  },
  {
    id: 1,
    icon: (
      <Image
  src="/images/products/kepfile01.jpg"  // Replace with the correct path to your SVG file
  alt="description of the image"
  width={250} 
  height={250}
/>
    ),
    title: "In kẹp file"  },
    {
      id: 1,
      icon: (
        <Image
    src="/images/products/lichtet.jpg"  // Replace with the correct path to your SVG file
    alt="description of the image"
    width={250} 
    height={250}
  />
      ),
      title: "In lịch Tết"  },
      {
        id: 1,
        icon: (
          <Image
      src="/images/products/Toroi.jpg"  // Replace with the correct path to your SVG file
      alt="description of the image"
      width={250} 
      height={250}
    />
        ),
        title: "In tờ rơi quảng cáo"  },
];
export default featuresData;
