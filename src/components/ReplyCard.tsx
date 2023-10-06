import React from "react";
import Image from "next/image";
import { CommentType } from "@/app/page";
function ReplyCard({ comment }: { comment: CommentType }) {
  return (
    <div className="flex bg-white items-start px-5 py-6 rounded-xl my-3 ">
      <div className="flex flex-col items-center justify-center bg-light-gray p-2 rounded-[8px] gap-2 w-[40px] h-auto">
        <div>
          <button className="text-light-grayish-blue  font-medium">+</button>
        </div>
        <div>
          <h1 className="text-moderate-blue font-medium  ">{comment.score}</h1>
        </div>

        <div>
          <button className="text-light-grayish-blue font-medium  ">-</button>
        </div>
      </div>
      <div className="pl-6 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <Image
              src={comment.user.image.png}
              width={35}
              height={35}
              alt="avatar"
              className="rounded-full"
            />
            <div className="font-medium">{comment.user.username}</div>
            <div className="text-[gray] text-sm">{comment.createdAt} </div>
          </div>
          <div className="font-medium flex gap-3 items-center  text-moderate-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" className='fill-moderate-blue' />
            </svg>
            <span>Reply</span>
          </div>
        </div>
        <div className="text-[gray] text-sm pt-3  leading-[21px]">
          {comment.content}
        </div>
      </div>
    </div>
  );
}

export default ReplyCard;
