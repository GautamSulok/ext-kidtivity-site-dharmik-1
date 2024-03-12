import Favorites from "./Favorites"
import Featured from "./Featured"
import RecentlyViewed from "./RecentlyUsed"


const AllFeatures = ({
    handleFeatureSelect,
    passFunc,
    features,
    featureFavorite,
    featureRecent
}: {
    handleFeatureSelect: any,
    passFunc: (feature: any) => void,
    features,
    featureFavorite,
    featureRecent
}) => {
    return (
        <>
            <Featured handleFeatureSelect={handleFeatureSelect} features={features} passFunc={passFunc} />
            <Favorites featureFavorite={featureFavorite} />
            <RecentlyViewed featureRecent={featureRecent} />
        </>
    )
}

export default AllFeatures