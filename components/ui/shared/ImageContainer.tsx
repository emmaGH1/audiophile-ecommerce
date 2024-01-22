import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, 'src'> {
    mobileSrc: string,
    mobileWidth?: number,
    mobileHeight?: number,
    tabletSrc: string,
    tabletWidth?: number,
    tabletHeight?: number,
    desktopSrc: string,
    desktopWidth?: number,
    desktopHeight?: number,
    alt: string,
    className?: string,
    fill?: boolean
    containerStyle?: string
}

const ImageContainer = ({
        mobileSrc, mobileWidth, mobileHeight, tabletSrc, tabletWidth, tabletHeight,
        desktopSrc, desktopWidth, desktopHeight, alt, className, fill, containerStyle, ...rest
    }: Props) => {
    return (
        <>
            {
                fill ?
                    <div className={containerStyle}>
                        <Image {...rest} src={mobileSrc} alt={alt} fill className={`sm:hidden ${className} `}/>
                        <Image {...rest} src={tabletSrc} alt={alt} fill className={`hidden sm:block lg:hidden ${className}`} />
                        <Image {...rest} src={desktopSrc} alt={alt} fill className={`hidden lg:block ${className}`} />
                    </div>
                    :
                    <div className={containerStyle}>
                        <Image {...rest} src={mobileSrc} alt={alt} width={mobileWidth} height={mobileHeight} className={`sm:hidden ${className} `}/>
                        <Image {...rest} src={tabletSrc} alt={alt} width={tabletWidth} height={tabletHeight} className={`hidden sm:block lg:hidden ${className}`} />
                        <Image {...rest} src={desktopSrc} alt={alt} width={desktopWidth} height={desktopHeight} className={`hidden lg:block ${className}`} />
                    </div>
            }
        </>
    );
};

export default ImageContainer;
