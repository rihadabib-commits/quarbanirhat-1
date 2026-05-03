

// "use client";

// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Page = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photo, setPhoto] = useState("");

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     // ❌ validation (empty check)
//     if (!name || !email || !photo) {
//       toast.error(" Please fill all fields!");
//       return;
//     }

//     // ✅ success
//     toast.success(" Information updated successfully!");

//     // clear form
//     setName("");
//     setEmail("");
//     setPhoto("");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

//       <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md border border-gray-100">

//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Update Information
//         </h2>

//         <form className="space-y-4" onSubmit={handleUpdate}>

//           {/* Name */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Name
//             </label>

//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Email
//             </label>

//             <input
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Photo */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Photo URL
//             </label>

//             <input
//               type="text"
//               placeholder="https://example.com/photo.jpg"
//               value={photo}
//               onChange={(e) => setPhoto(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Preview */}
//           <div className="flex justify-center py-4">
//             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-50 flex items-center justify-center">
//               {photo ? (
//                 <img
//                   src={photo}
//                   alt="preview"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <span className="text-gray-400 text-sm">No Image</span>
//               )}
//             </div>
//           </div>

//           {/* Live name preview */}
//           <div className="text-center">
//             <p className="font-semibold text-gray-700">
//               {"Your Name"}
//             </p>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-lg"
//           >
//             Update Information
//           </button>

//         </form>

//       </div>

//       {/* Toast */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name && !email && !photo) {
      toast.error("At least one field fill কর!");
      return;
    }

    try {
      const { error } = await authClient.updateUser({
        name: name || undefined,
        email: email || undefined,
        image: photo || undefined,
      });

      if (error) {
        console.log(error);
        toast.error("Update failed ❌");
        return;
      }

      toast.success("Profile updated successfully ✅");

      setName("");
      setEmail("");
      setPhoto("");

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Update Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="New Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border text-black rounded"
          />

         

          {/* PHOTO */}
          <input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full px-3 py-2 border text-black rounded"
          />

          {/* PREVIEW */}
          <div className="flex justify-center">
            {photo ? (
              <img
                src={photo}
                alt="preview"
                className="w-28 h-28 rounded-full object-cover border"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gray-200" />
            )}
          </div>

          {/* BUTTON */}
          
          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 rounded"
          >
            Update Profile
          </button>
          

        </form>

      </div>

      <ToastContainer />
    </div>
  );
};

export default Page;