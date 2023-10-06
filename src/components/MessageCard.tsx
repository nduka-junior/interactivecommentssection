import React from "react";
import Image from "next/image";
function MessageCard() {
  return (
    <div className="flex items-start justify-between gap-5 bg-[white] rounded-xl px-5 py-7 shadow-[0px_-10px_90px_5px_#00000024] mt-3 ">
      <Image
        src="https://lh3.googleusercontent.com/ogw/AKPQZvwlEvbTriEpudDwN7BzRcb1V9EW3_7a4lsORb8iHQ=s64-c-mo"
        height={35}
        width={35}
        alt="avatar"
        className="rounded-full"
      />
      <textarea
        name=""
        cols={20}
        rows={3}
        placeholder="Add a comment"
        className="p-3 w-full border-[1px] rounded-[10px] outline-none focus:border-moderate-blue placeholder:text-sm"
      ></textarea>
      <button className="bg-moderate-blue text-white py-2 px-6 rounded-[10px] ">
        SEND
      </button>
    </div>
  );
}

export default MessageCard;
