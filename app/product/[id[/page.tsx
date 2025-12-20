"use client"
import { useParams } from "next/navigation"
import Image from "next/image"

export default function ProductPage(){
    const { id } = useParams();

    //Temp : Replace with Api /Redux Later
    // TEMP: Replace with API / Redux later
  const product = {
    id,
    name: "Banana",
    price: 40,
    unit: "each",
    image: "/images/banana.png",
    description: "Fresh organic bananas, rich in nutrients."
  };

  return(
  <div className="">
    {/* image */}

    <div>
        <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        />
    </div>

    {/* details */}
    <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.unit}</p>
        <p className="text-xl font-semibold">₹{product.price}</p>

        <p className="text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

  </div>
  );
}