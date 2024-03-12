import { Card, CardContent } from "@ui/components/card"

const RecentlyUsed = ({
    featureRecent
}: {
    featureRecent: any
}) => {
    return (
        <div className="flex flex-col gap-4 pb-6">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">Recently Used</p>
                <span>History of created and viewed activities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    featureRecent && Array.isArray(featureRecent) && featureRecent.length > 0 && featureRecent.map((recent, index) => {
                        return (
                            <Card key={index}>
                                <CardContent className="py-8 md:!px-8 !px-4 rounded-md relative">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="p-3 px-5 bg-purple-100 rounded-[20px]">
                                            <span className="text-lg text-purple-800 font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-lg text-purple-800 font-bold">{recent.title}</p>
                                            <span className="text-sm">Viewed on {new Date(recent.created_at).toLocaleDateString()}</span><br />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecentlyUsed