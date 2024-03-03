import ImageContainer from "@/components/ui/shared/ImageContainer";
import { fetchProductsByCategory } from "../lib/data";
import { Description } from '../../components/ui/shared/Description';
import { Button } from "@/components/ui/shared/Button";
import Explore from "@/components/ui/shared/Explore";
import About from "@/components/ui/shared/About";


export default async function Page() {
  const data = await fetchProductsByCategory('speakers')
  console.log(data)
  return (
    <>
        <div className="text-white-text bg-black-banner flex justify-center mb-10">
          <h1 className="text-4xl uppercase font-extrabold my-10 lg:my-20">
            speakers
          </h1>
        </div>

      <div className="mt-20">
        {data.map((item, ) => {
          return (
            <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse w-9/10 mx-auto lg:justify-between xl:h-[85vh] mb-28" key={item.slug}>
                <ImageContainer 
                  mobileSrc={item.image_mobile}
                  tabletSrc={item.image_mobile}
                  desktopSrc={item.image_desktop}
                  fill
                  alt={item.name}
                  className="md:object-contain lg:object-cover lg:object-center"
                  containerStyle="relative lg:w-[45%] w-full h-96 xl:h-auto"
                />

                <div className=" lg:w-[45%] lg:flex lg:flex-col lg:justify-center lg:text-left text-center">
                    <div className="uppercase text-orange-secondary tracking-[0.5em] text-sm mt-5 lg:mt-0">
                      {item.new && 'New Product'}
                    </div>
                    <h1 className="text-3xl font-bold uppercase mt-3 lg:w-2/4 md:mt-10">
                      {item.name}
                    </h1>
                    <p className="leading-relaxed tracking-wide w-full mt-5 md:w-4/5 lg:w-full md:mx-auto">{item.description}</p> 
                    <Button className=" bg-orange-secondary mt-7 hover:bg-orange-secondary/80"/>
                </div>
         </div>
          )
        })}
      </div>
      
      <Explore />

      <div className="mt-32 mb-20">
        <About/>
      </div>
      

    </>
  )
};

