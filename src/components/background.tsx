import Image from "next/image";
import blob1 from "@/assets/blobs/blob_1.svg"
import blob2 from "@/assets/blobs/blob_2.svg"
import blob3 from "@/assets/blobs/blob_3.svg"
import blob4 from "@/assets/blobs/blob_4.svg"

export default function Background() {
return (
    <div className="fixed inset-0 h-screen -z-10 blur-3xl">
        <Image src={blob1} alt="blob1" className="absolute top-10 left-10" />
        <Image src={blob2} alt="blob2" className="absolute bottom-5 right-15" />
        <Image src={blob3} alt="blob3" className="absolute -top-5 right-8" />
        <Image src={blob4} alt="blob4" className="absolute -bottom-0 left-5" />
    </div>
  )
}