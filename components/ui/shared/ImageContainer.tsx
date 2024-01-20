import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, 'src'> {
    mobileSrc: string,
    mobileWidth: number,
    mobileHeight: number,
    tabletSrc: string,
    tabletWidth: number,
    tabletHeight: number,
    desktopSrc: string,
    desktopWidth: number,
    desktopHeight: number,
    alt: string
    className?: string
}

const ImageContainer = ({
    mobileSrc, mobileWidth, mobileHeight,
    tabletSrc, tabletWidth, tabletHeight,
    desktopSrc, desktopWidth, desktopHeight,
    alt, className, ...rest
}: Props) => {
    return (
        <>
            <Image {...rest} src={mobileSrc} alt={alt} width={mobileWidth} height={mobileHeight}  className="sm:hidden"/>
            <Image {...rest} src={tabletSrc} alt={alt} width={tabletWidth} height={tabletHeight}   className="hidden sm:block lg:hidden"/>
            <Image {...rest} src={desktopSrc} alt={alt} width={desktopWidth} height={desktopHeight} className="hidden lg:block"/>
        </>
    );
};

export default ImageContainer;
