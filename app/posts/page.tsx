import { Comment, Like, User } from "@prisma/client";
import Feed from "./Feed";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`, {
    cache: "no-store",
  });
  // console.log(res);
  return res.json();
}

export default async function Posts() {
  // const data: {
  //   id: string;
  //   content: string;
  //   user: User;
  //   createdAt: string;
  //   likes: Like[];
  //   comments: {
  //     id: string;
  //     user: User;
  //     createdAt: string;
  //     content: string;
  //   }[];
  // }[] = await getPosts();
  // console.log(data);
  return (
    <main>
      <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500">
        Post Page
      </h1>
    </main>
  );
}
