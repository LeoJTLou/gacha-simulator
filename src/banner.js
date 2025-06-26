export default function Banner (props) {
    return (
        <div className="banner-container">
            <div className="gacha-banner" style={{backgroundColor: props.bannerColor}}>
                <h3>{props.title}</h3>
                <div className="button-wrapper">
                    <button onClick={() => {
                        if (props.wishCount > 0) {
                            props.setWishCount(props.wishCount - 1);
                        }
                    }}>
                        Pull x1
                    </button>
                    <button onClick={() => {
                        if (props.wishCount > 0) {
                            props.setWishCount(props.wishCount - 10);
                        }
                    }}>
                        Pull x10
                    </button>
                </div>
            </div>
        </div>
    )
}