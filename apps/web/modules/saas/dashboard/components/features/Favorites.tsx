import { Card, CardContent } from "@ui/components/card";
import { Star } from "lucide-react";
import Image from "next/image";

type FeatureData = {
    chatId: string;
    title: string;
    description: string;
    image: string;
    featured: boolean;
    tier: string;
    created_at: string;
    updated_at: string;
};
const Favorites = ({
    featureFavorite
}: {
    featureFavorite: FeatureData[]
}) => {
    return (
        <div className="flex flex-col gap-4 pb-6">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">Favorites</p>
                <span>Saved activities for quick access</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    featureFavorite && Array.isArray(featureFavorite) && featureFavorite.length > 0 && featureFavorite.map((feature, index) => {
                        return (
                            <Card key={index} className="border-gray-200 border-2">
                                <CardContent className="bg-white py-8 !px-8 rounded-md relative">
                                    <div className="flex flex-col md:flex-row gap-4 items-center">
                                        <div>
                                            <Image
                                                src={feature?.image}
                                                alt={feature?.title}
                                                width={100}
                                                height={5}
                                                className="object-cover object-center w-full max-h-32 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-lg text-purple-800 font-bold">{feature.title}</p>
                                            <span className="text-sm text-purple-800">{feature.description}</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <div className="flex justify-end items-center">
                                            <div className="bg-blue-100 py-1 px-2 rounded-full">
                                                <Star width={15} fill="rgb(30 64 175)" color="rgb(30 64 175)" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Favorites