import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";


const Testimonials = () => {
  const products = [
    {
      img: "/images/products/san_pham_mau_2.jpg",
      label: "Wines",
      colSpan: "md:col-span-2",
      bgColor: "bg-gray-50",
    },
    {
      img: "/images/products/san_pham_mau_3.jpg",
      label: "Gin",
      colSpan: "md:col-span-2",
      bgColor: "bg-stone-50",
      subItems: [
        {
          img: "https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          label: "Whiskey",
        },
        {
          img: "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          label: "Vodka",
        },
      ],
    },
    {
      img: "/images/products/san_pham_mau_1.jpg",
      label: "Brandy",
      colSpan: "md:col-span-1",
      bgColor: "bg-sky-50",
    },
  ];

  return (
    <section className="bg-white">
       <SectionTitle
          title="Dưới đây là một số sản phẩm chúng tôi đã hoàn thiện cho khách hàng"
           paragraph=""
          center
          mb="80px"
        />
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${
                product.colSpan || "col-span-1"
              } ${product.bgColor} h-auto md:h-full flex flex-col`}
            >
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={product.img}
                  alt={product.label}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {product.label}
                </h3>
              </a>
              {/* Sub-items */}
              {product.subItems && (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-4">
                  {product.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                    >
                      <img
                        src={subItem.img}
                        alt={subItem.label}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        {subItem.label}
                      </h3>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
