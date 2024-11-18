import { cn } from "../lib/utils";
import Marquee from "./marquee";

const reviews = [
  {
    img: "https://media.gettyimages.com/id/109864226/es/foto/bow-of-motoryacht.jpg?s=612x612&w=0&k=20&c=4l5KrzWAuAGkTn1by3PGtoSs_j4zGTb6Szhbkq37Bsc=",
  },
  {
    img: "https://media.gettyimages.com/id/182399476/es/foto/mega-yacht-cerca-de-la-isla.jpg?s=612x612&w=0&k=20&c=9nJgofa18v6e3MFiSztZwxveASfVgIBmU0OoXWMSz_o=",
  },
  {
    img: "https://media.gettyimages.com/id/112860979/es/foto/couple-on-yacht-powering-through-sea.jpg?s=612x612&w=0&k=20&c=Q7m1cfRNZ1HKEIXQcXROqM76GscrMeaBDZENC9DSVFk=",
  },
  {
    img: "https://media.gettyimages.com/id/503108753/es/foto/sunset-on-the-open-ocean-w-beautiful-sailboat.jpg?s=612x612&w=0&k=20&c=ieBlD-mueAYXif9TlznWSHcUeIhwBuwuEsURtCU1OhY=",
  },
  {
    img: "https://media.gettyimages.com/id/604646372/es/foto/fast-yacht.jpg?s=612x612&w=0&k=20&c=lw8bFC7WlqzPcS9rTwFQDv81vuO_k-yIqB1jm9yNRJU=",
  },
  {
    img: "https://media.gettyimages.com/id/1436720050/es/foto/pareja-tomando-el-sol-en-yate.jpg?s=612x612&w=0&k=20&c=1y1Q-TrdkivGrq65k9NnjSJrlUvJqx-vZn57vC-Kc38=",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-0",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
       <img className=" w-full h-full" alt="" src={img} />
   
      
    </figure>
  );
};

export default function ImageSlider() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
     
    </div>
  );
}
