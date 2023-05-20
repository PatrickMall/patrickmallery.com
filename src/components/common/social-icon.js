const SocialIcon = ({brand}) => {
    return (
        <div className="icon1 inline mr-20">
            <div className="inline bg-black">
                <a>
                    <i class={brand === 'fa-facebook-f' ? `fa-brands fa-2xl px-1 media-icon ${brand}` : `fa-brands py-2 fa-2xl media-icon ${brand}`}></i>
                </a>
            </div>
        </div>
    )
}
export default SocialIcon