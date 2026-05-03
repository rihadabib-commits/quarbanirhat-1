import Image from "next/image";
import Banner from "./components/banner/Banner";
import Card from "@/api/Card";
import Middle from "./components/middle/Middle";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
   <Card></Card>
   <Middle></Middle>
   </div>
  );
}
