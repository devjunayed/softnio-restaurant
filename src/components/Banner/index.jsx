import Button from "../ui/Button";
import Wrapper from "../Wrapper";

const Banner = () => {
  return (
    <div className="overflow-hidden bg-[url('/background/banner-bg.svg')] px-6 -z-50  bg-cover bg-center">
      <Wrapper className={"lg:relative  lg:py-20"}>
        <div className="flex flex-col justify-center py-6  lg:h-[600px]">
          <img
            src="/Vector.svg"
            className="w-[45px] h-[45px] absolute right-4 top-16"
            alt=""
          />
          <div className="lg:absolute lg:left-0 z-20 lg:mx-4 my-10 lg:my-0">
            <div className="bebos-neue-heading lg:bg-red-700  uppercase lg:bg-opacity-55 lg:py-8 lg:pr-8 lg:pl-2 text-white font-bold text-3xl lg:text-5xl xl:text-6xl ">
              <h1 className="font-semibold text-white opacity-100">
                Taste the authentic <br /> Saudi cuisine
              </h1>
            </div>
            <p className="text-white lg:pl-2 lg:my-6 my-4">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <Button className="pl-2">Explore menu</Button>
          </div>
          <div className="z-10 relative">
            
            <img
              src="/image.png"
              className="lg:absolute z-10 w-full lg:w-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:right-0"
              alt=""
            />
            <img className="absolute z-20 bottom-0 right-0 lg:-bottom-80 lg:-right-10" src="/todays-offer.svg" alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
