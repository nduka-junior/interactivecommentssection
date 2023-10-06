import React from "react";
import ReplyCard from "../components/ReplyCard";
import data from "@/lib/data.json";
import MessageCard from "@/components/MessageCard";

export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: CommentType[];
}

function processReplies(replies: CommentType[]): React.ReactNode {
  return (
    <>
      {replies.map((reply) => (
        <div
          key={reply.id}
          className="w-full flex flex-col justify-end items-end relative "
        >
          <div className="border-l-[2px] h-full absolute left-[2vw]  max-lg:left-[1vw]"></div>

          <div className="w-[90%] max-lg:w-[95%] ">
            <ReplyCard comment={reply} />
          </div>
          {reply.replies && reply.replies.length > 0 && (
            <div className="w-[90%] max-lg:w-[95%]">
              {processReplies(reply.replies)}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default function Home() {
  const parse = JSON.stringify(data);
  const parseData = JSON.parse(parse);

  return (
    <div className="bg-very-light-gray pb-[10px] min-h-screen px-[4vw] pt-[4vh] lg:mx-[14vw]">
      <div className="overflow-y-auto h-[74vh]">
        {parseData.comments.map((comment: CommentType) => (
          <div key={comment.id}>
            <ReplyCard comment={comment} />

            {comment.replies && comment.replies.length > 0 && (
              <div className="w-[90%]">{processReplies(comment.replies)}</div>
            )}
          </div>
        ))}
      </div>
      <MessageCard />
    </div>
  );
}
