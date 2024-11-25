import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";
const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <Image
      src="/images/Background/background1.jpg"
      alt="background"
      width={1920}
      height={480}
      className="w-full" />
      </div>

      {/* Contact Form and Info Section */}
      <div className="container px-6 md:px-12">
  <div className="block rounded-lg bg-white/80 px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-md border border-gray-300">
    <div className="flex flex-wrap lg:flex-nowrap lg:justify-between lg:items-start lg:gap-6">
      {/* Support Info */}
      <div className="flex items-center lg:w-1/3 space-x-4">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className="mb-2 font-bold">Liên hệ ngay</p>
          <p className="text-sm text-neutral-500">0988.446.379</p>
        </div>
      </div>

      {/* Email Info */}
      <div className="flex items-center lg:w-1/3 space-x-4">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="mb-2 font-bold">Email</p>
          <p className="text-sm text-neutral-500">ingialinh@gmail.com</p>
        </div>
      </div>

      {/* Address Info */}
      <div className="flex items-center lg:w-1/3 space-x-4">
        <div className="shrink-0">
          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>
        </div>
        <div>
          <p className="mb-2 font-bold">Địa chỉ</p>
          <p className="text-sm text-neutral-500">
            Số 18 ngách 21/50 đường Yên Xá, Tân Triều, Thanh Trì, Hà Nội
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
};

export default Contact;
