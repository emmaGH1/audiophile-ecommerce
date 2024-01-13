import Image from "next/image";

type classNameProp = string;

const BannerImage = (className: string) => {
  return (
    <div className={className}>
        <Image 
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        src='/home/mobile/image-header.jpg' 
        alt='Banner Image'
        className="md:hidden bg-cover bg-no-repeat bg-center"
        />
        <Image 
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        src='/home/desktop/image-hero.jpg' 
        alt='Banner Image'
        className="hidden md:hidden bg-cover bg-no-repeat bg-center"
        />
        <Image 
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        src='/home/tablet/image-header.jpg' 
        alt='Banner Image'
        className="hidden lg:hidden bg-cover bg-no-repeat bg-center"
        />
    </div>
  );
};

export default BannerImage;