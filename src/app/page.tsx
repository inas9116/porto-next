import Footer from "@/components/footer/page";
import Jumbotron from "@/components/jumbotron/page";
import Navbar from "@/components/navbar/page";
import Project from "@/components/project/page";
import Testimoni from "@/components/testimoni/page";
import Contact from "@/components/contact/page";
import Working from "@/components/working/page";
import Image from "next/image";



export default function Home() {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Working />
    <Project />
    <Testimoni />
    <Contact />
    <Footer />
    </>
  )
}
