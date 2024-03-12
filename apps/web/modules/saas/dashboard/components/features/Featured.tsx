import { Card, CardContent } from "@ui/components/card"
import { Star } from "lucide-react"
import Image from "next/image"

const Featured = async ({
    handleFeatureSelect,
    passFunc,
    features
}: {
    handleFeatureSelect: any,
    passFunc: (feature) => void,
    features
}) => {

    return (
        <div className="flex flex-col gap-4 pb-6">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">Featured</p>
                <span>Curated activities from our community</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    features && Array.isArray(features) && features.length > 0 && features.map((feature, index) => {
                        return (
                            <div className="relative">
                                <div className="absolute top-36 right-6">
                                    <div onClick={async () => handleFeatureSelect(feature?.chatId)} className="bg-white py-1 px-2 rounded-full cursor-pointer">
                                        <Star width={15} fill={feature.is_favorite ? "rgb(30 64 175)" : "transparent"} color="rgb(30 64 175)" />
                                    </div>
                                </div>
                                <Card onClick={() => passFunc(feature)} className="cursor-pointer" key={index}>
                                    <div>
                                        <Image
                                            src={feature?.image}
                                            alt={feature?.title}
                                            width={100}
                                            height={5}
                                            className="object-cover object-center w-full h-32 rounded-t-md"
                                        />
                                    </div>
                                    <CardContent className="bg-purple-100 py-6 !pb-8 !px-5 !pt-12 rounded-b-md">
                                        <div>
                                            <p className="text-lg text-purple-800 font-bold">{feature.title}</p>
                                            <span className="text-sm text-purple-800">{feature.description}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featured