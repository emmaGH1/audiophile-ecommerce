import ImageContainer from "@/components/ui/shared/ImageContainer";
import { fetchProductsByCategory } from "../lib/data";
import { Description } from '../../components/ui/shared/Description';
import { Button } from "@/components/ui/shared/Button";


export default async function Page() {
  const data = await fetchProductsByCategory('headphones')
  console.log(data)
  return (
    <>
      <div className="text-white-text bg-black-banner flex justify-center mb-10">
         <h1 className="text-4xl uppercase font-extrabold my-10 lg:my-20">
          headphones
         </h1>
      </div>

      <div className="mt-10">
          {data.map((each, i) => {
            
            return (
              <div className="relative flex flex-col md:flex-row mb-10 even:md:flex-row-reverse" key={i}>
                <ImageContainer 
                  mobileSrc={each.image_mobile}
                  tabletSrc={each.image_mobile}
                  desktopSrc={each.image_desktop}
                  fill
                  alt={each.name}
                  className=" object-cover sm:object-contain"
                  containerStyle="relative w-9/10 mx-auto h-96 mb-7"
                />

                <div className="mx-auto flex flex-col justify-center items-center md:items-start md:justify-normal">
                    <div className="uppercase text-center text-orange-secondary tracking-[0.5em] text-sm">
                      {each.new && 'New Product'}
                    </div>
                    <h1 className="text-3xl font-bold uppercase w-2/4 mt-3 text-center md:text-start">
                      {each.name}
                    </h1>
                    <Description text={each.description} className="mt-0 text-center leading-relaxed w-9/10 tracking-wide md:text-start md:w-full"/>
                    <Button className=" bg-orange-secondary mb-14"/>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
};

