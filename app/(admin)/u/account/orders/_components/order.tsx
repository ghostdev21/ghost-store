import Image from "next/image";

export default function Order () {
    return (
        <div>
           <h2>#124321</h2>
           <span>Sun Jan 21 2024 </span>
           <Image src="/images/gowwo.webp" alt="gorro_web_product" width={100} height={300}/>
           <p>Exorbitan elegance x3</p>
        </div>
    )
}