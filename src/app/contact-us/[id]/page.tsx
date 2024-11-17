// "use-client"
// import React from 'react';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export default async function DetailedPage({ queryparams }: { queryparams: { id: string } }) {
//   const route = useRouter();
//   const { id } = route.query;
//   const [packageData, setPackageData] = useState(null);

//   useEffect(() = > {
//     if(id)
//   })
//   if (!packageData) {
//     return (
//       <div className="p-6 bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl font-bold mb-4">Package not found</h1>
//         <p>We could not find the package you are looking for.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">{packageData.name}</h1>
//       <p>
//         <strong>Name:</strong> ${packageData.name}
//       </p>
//       <p>
//         <strong>Email:</strong> {packageData.email}
//       </p>
//       <p>
//         <strong>Message:</strong> {packageData.message}
//       </p>
//     </div>
//   );
// }
