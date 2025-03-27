import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ChatboxPage from "~/features/chatbox/ChatboxPage/ChatboxPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div>Chatbox LLM</div>
      <ChatboxPage />
    </>
  );
}
