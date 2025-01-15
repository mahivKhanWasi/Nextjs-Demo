import { redirect, useRouter } from "next/navigation";

export default function Home() {
   redirect("/login");
   // const router = useRouter();
   // router.push("/login");
}
