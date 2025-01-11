import Login from "@/app/components/login";
import Cohere from "@/app/components/cohere";
export default function Home() {
  return (
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Login />
      <Cohere />
    </main>
  );
}
