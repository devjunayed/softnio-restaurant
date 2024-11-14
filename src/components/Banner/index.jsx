import Button from "../ui/Button";
import Wrapper from "../Wrapper";

const Banner = () => {
  return (
    <div className="bg-[url('/background/banner-bg.svg')] -z-50  bg-cover bg-center">
      <Wrapper className={"relative py-20"}>
        <div className="flex items-center h-[600px]">
          <img
            src="/Vector.svg"
            className="w-[45px] h-[45px] absolute right-4 top-16"
            alt=""
          />
          <div className="absolute z-20">
            <div className="bebos-neue-heading bg-red-700  uppercase bg-opacity-55 p-8 text-white font-bold text-6xl">
              <h1 className="font-semibold text-white opacity-100">
                Taste the authentic <br /> Saudi cuisine
              </h1>
            </div>
            <p className="text-white my-6">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <Button>Explore menu</Button>
          </div>
          <div className="z-10">
            <img
              src="/image.svg"
              className="absolute z-10 w-1/2 top-1/2 -translate-y-1/2 right-0"
              alt=""
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
