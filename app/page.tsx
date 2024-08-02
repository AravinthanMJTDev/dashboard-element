import Image from "next/image";
import image from "./images/person.png";

export default function Home() {
  const percent = 70;

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div className="w-60  flex flex-col items-center text-center justify-around  box-content  bg-gray-300 rounded-[25px] scale-150">
        <div className="bg-red-500 rounded-full text-white py-2 px-3 m-2">
          {percent}%
        </div>
        <div className="relative p-2">
          <Image src={image} alt="person" className="rounded-full"></Image>
          <svg
            className="absolute inset-0 transform rotate-[-90deg]"
            viewBox="0 0 36 36"
          >
            <path
              className="stroke-gray-200 stroke-[2.8]"
              fill="none"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="stroke-gray-700 stroke-[2.8] stroke-linecap-round"
              fill="none"
              strokeDasharray={`${percent}, 100`}
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>

        <h1 className="font-bold">4,783</h1>
        <h3>customers</h3>
      </div>
    </main>
  );
}
