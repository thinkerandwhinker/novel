import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import NovelDetailPage from "./pages/NovelDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "novel/:id",
//         element: <NovelDetailPage />,
//       },
//       {
//         path: "about",
//         element: (
//           <div className="p-6 bg-[#0D1C42] border border-[#22396F] rounded-2xl">
//             <h1 className="text-2xl font-bold mb-2">Tentang Penulis</h1>
//             <p className="text-[#FCF1D0]/80">
//               Jujur saja, saya ini ibarat Ultraman versi gampang burnout. Skill
//               utama saya adalah kuis "Palugada" (Apa Lu Mau, Gua Ada)—sebuah
//               kemampuan serbabisa yang sering jadi pedang bermata dua. Spektrum
//               keahlian saya terbilang lumayan ekstrem: di satu sisi, saya
//               terbiasa dengan pekerjaan fisik seperti kuli bangunan sampai
//               ngarit rumput. Namun di sisi lain, saya juga menguasai bidang
//               teknis dan digital, mulai dari build aplikasi mobile/web custom,
//               desain UI, edit foto, desain CAD, build firmware, hingga DevOps
//               kecil-kecilan kalau situasi lagi kepepet.
//             </p>
//           </div>
//         ),
//       },
//       {
//         path: "disclaimer",
//         element: (
//           <div className="p-6 bg-[#0D1C42] border border-[#22396F] rounded-2xl">
//             <h1 className="text-2xl font-bold mb-2">Disclaimer</h1>
//             <p className="text-[#FCF1D0]/80">
//               Karya di dalam platform ini merupakan karya fiksi. Nama, tokoh,
//               tempat, dan kejadian di dalamnya merupakan hasil imajinasi penulis
//               atau digunakan secara fiktif. Adanya kesamaan dengan nama, tokoh,
//               atau peristiwa nyata di kehidupan nyata adalah unsur
//               ketidaksengajaan.
//             </p>
//           </div>
//         ),
//       },
//       {
//         path: "/*",
//         element: <NotFoundPage />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "novel/:id", element: <NovelDetailPage /> },
        {
          path: "about",
          element: (
            <div className="p-6 bg-[#0D1C42] border border-[#22396F] rounded-2xl">
              <h1 className="text-2xl font-bold mb-2">Tentang Penulis</h1>
              Jujur saja, saya ini ibarat Ultraman versi gampang burnout. Skill
              utama saya adalah kuis "Palugada" (Apa Lu Mau, Gua Ada)—sebuah
              kemampuan serbabisa yang sering jadi pedang bermata dua. Spektrum
              keahlian saya terbilang lumayan ekstrem: di satu sisi, saya
              terbiasa dengan pekerjaan fisik seperti kuli bangunan sampai
              ngarit rumput. Namun di sisi lain, saya juga menguasai bidang
              teknis dan digital, mulai dari build aplikasi mobile/web custom,
              desain UI, edit foto, desain CAD, build firmware, hingga DevOps
              kecil-kecilan kalau situasi lagi kepepet.
            </div>
          ),
        },
        {
          path: "disclaimer",
          element: (
            <div className="p-6 bg-[#0D1C42] border border-[#22396F] rounded-2xl">
              <h1 className="text-2xl font-bold mb-2">Disclaimer</h1>
              Karya di dalam platform ini merupakan karya fiksi. Nama, tokoh,
              tempat, dan kejadian di dalamnya merupakan hasil imajinasi penulis
              atau digunakan secara fiktif. Adanya kesamaan dengan nama, tokoh,
              atau peristiwa nyata di kehidupan nyata adalah unsur
              ketidaksengajaan.
            </div>
          ),
        },
        { path: "/*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // take base url for gh pages
  },
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
