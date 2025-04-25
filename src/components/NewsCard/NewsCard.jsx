import React from 'react';
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";

function NewsCard({ news }) {
   const {
      title,
      thumbnail_url,
      details,
      total_view,
      rating,
      author,
   } = news;

   return (
      <div className="w-full mx-auto bg-white rounded-xl shadow-xs border border-gray-200/80 overflow-hidden p-4 space-y-4">
         <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center gap-2">
               <img
                  src={author?.img}
                  alt={author?.name}
                  className="w-10 h-10 rounded-full"
               />
               <div>
                  <p className="font-semibold text-gray-800">{author?.name}</p>
                  <p className="text-xs">{author?.published_date?.split(" ")[0]}</p>
               </div>
            </div>
            <FaShareAlt className="text-gray-400 hover:text-gray-600 cursor-pointer" />
         </div>

         {/* Title */}
         <h2 className="text-lg font-bold text-gray-800">{title}</h2>

         {/* Thumbnail */}
         <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full h-52 object-cover rounded-md"
         />

         {/* Details */}
         <p className="text-sm text-gray-600">
            {details?.slice(0, 250)}...{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
               Read More
            </span>
         </p>

         {/* Footer: Rating & Views */}
         <div className="flex justify-between items-center border-t pt-2 mt-2 text-sm">
            <div className="flex items-center gap-1 text-orange-500">
               {[...Array(5)].map((_, i) => (
                  <FaStar
                     key={i}
                     className={i < Math.round(rating?.number) ? 'text-orange-500' : 'text-gray-300'}
                  />
               ))}
               <span className="text-gray-700 ml-1">{rating?.number}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
               <FaEye />
               <span>{total_view}</span>
            </div>
         </div>
      </div>
   );
}

export default NewsCard;
