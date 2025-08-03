import React from "react";
import { Link } from "react-router-dom";
import DatabaseService from "../appwrite/config";

const PostCard = ({ $id, featuredImage, title }) => {
  // console.log({ $id, featuredImage, title });
  const filePreview = DatabaseService.getFilePreview(featuredImage) + "&mode=admin";
  // console.log("filePreview: ", filePreview);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4  ">
        <div className="w-full justify-center mb-4">
          <img
            src={filePreview}
            alt={title}
            className="rounded-xl object-cover w-full h-64"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
