// "use client";

// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Imagen from "../assets/image-6.jpg";
// // import { Link } from "react-router-dom";

// export default function Imagen3d() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="w-full">
//         {/* <CardItem */}
//         {/*   translateZ="50" */}
//         {/*   className="text-xl font-bold text-neutral-600 dark:text-white" */}
//         {/* > */}
//         {/*   Make things float in air */}
//         {/* </CardItem> */}
//         {/* <CardItem */}
//         {/*   as="p" */}
//         {/*   translateZ="60" */}
//         {/*   className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300" */}
//         {/* > */}
//         {/*   Hover over this card to unleash the power of CSS perspective */}
//         {/* </CardItem> */}
//         <CardItem className="mt-4 mb-[100px]">
//           <img
//             src={Imagen}
//             className="h-[400px] w-[500px] object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//           <img
//             src={Imagen}
//             className="h-[200px] object-cover rounded-xl group-hover/card:shadow-xl -mt-[300px] w-[300px] -ml-[200px]"
//             alt="thumbnail"
//           />
//           <img
//             src={Imagen}
//             className="h-[200px] object-cover rounded-xl group-hover/card:shadow-xl -mt-[400px] w-[300px] ml-[200px] z-0"
//             alt="thumbnail"
//           />
//         </CardItem>
//         {/* <div className="flex justify-between items-center mt-20"> */}
//         {/*   <CardItem */}
//         {/*     translateZ={20} */}
//         {/*     as={Link} */}
//         {/*     href="https://twitter.com/mannupaaji" */}
//         {/*     target="__blank" */}
//         {/*     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white" */}
//         {/*   > */}
//         {/*     Try now → */}
//         {/*   </CardItem> */}
//         {/*   <CardItem */}
//         {/*     translateZ={20} */}
//         {/*     as="button" */}
//         {/*     className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold" */}
//         {/*   > */}
//         {/*     Sign up */}
//         {/*   </CardItem> */}
//         {/* </div> */}
//       </CardBody>
//     </CardContainer>
//   );
// }
"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Imagen from "../assets/image-6.jpg";

export default function Imagen3d() {
  return (
    <div>
      <div className=" my-20 w-full justify-center items-center">
        <h1 className="text-5xl text-center font-bold">Costa Concordia</h1>
      </div>
      <CardContainer className="inter-var">
        <CardBody className="w-full">
          <CardItem className="mt-4 mb-[100px] flex flex-col items-center">
            <img
              src={Imagen}
              className="h-[400px] w-[500px] object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />

            {/* Segunda imagen, desplazada hacia la izquierda y hacia arriba */}
            <img
              src={Imagen}
              className="h-[200px] w-[300px] object-cover rounded-xl group-hover/card:shadow-xl -mt-[280px] -ml-[500px]"
              alt="thumbnail"
            />

            {/* Tercera imagen, desplazada hacia la derecha y hacia atrás */}
            <img
              src={Imagen}
              className="h-[200px] w-[300px] object-cover rounded-xl group-hover/card:shadow-xl -mt-[420px] ml-[500px] -z-50"
              alt="thumbnail"
            />
            <img
              src={Imagen}
              className="h-[200px] w-[300px] object-cover rounded-xl group-hover/card:shadow-xl mt-[200px] ml-[500px]"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
