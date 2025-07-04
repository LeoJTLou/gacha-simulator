import { characterBanner, weaponBanner } from './data';

export default function Banner (props) {
    const activeBanner = props.title === 'Character' ? characterBanner : weaponBanner;
    function rollFromBanner(activeBanner) {

        const rand = Math.random();
        let cumulative = 0;

        for (const item of activeBanner) {
            cumulative += item.dropRate;
            if (rand < cumulative) {
                return item;
            }
        }

        return activeBanner[activeBanner.length - 1]; // fallback in case of floating point error
    }

    return (
        <div className="banner-container">
            <div className="gacha-banner" style={{backgroundColor: props.bannerColor}}>
                <h3>{props.title}</h3>
                <div className="button-wrapper">
                    <button onClick={() => {
                        if (props.wishCount > 0) {
                            const result = rollFromBanner(activeBanner);
                            props.setWishCount(props.wishCount - 1);
                            props.setPullResults([result]); // store as array for consistency
                            props.setShowApp('wish');
                        }
                    }}>
                        Pull x1
                    </button>
                    <button onClick={() => {
                        if (props.wishCount >= 10) {
                            const results = Array.from({ length: 10 }, () => {
                                const result = rollFromBanner(activeBanner);
                                return result;
                            });
                            props.setWishCount(props.wishCount - 10);
                            props.setPullResults(results);
                            props.setShowApp('wish');
                        }
                    }}>
                        Pull x10
                    </button>
                </div>
            </div>
        </div>
    )
}