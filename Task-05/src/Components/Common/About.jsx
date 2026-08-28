import { Check, Dot } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-24 flex gap-10">
      {/* left side element */}
      <div className="grid grid-cols-2 max-w-[600px]  gap-5">
        <div>
          <img
            className="rounded-sm h-full"
            src="../src/assets/Images/about-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-sm "
            src="../src/assets/Images/feature.jpg"
            alt=""
          />
        </div>

        <div className="col-span-2">
          <img
            className="rounded-sm h-[250px]"
            src="../src/assets/Images/about-2.jpg"
            alt=""
          />
        </div>
      </div>
      {/* right side element */}
      <div>
        <div>
          <div className="flex items-center ">
            <Dot className="size-12 text-[#F5A623]" />
            <p className="text-[#F5A623] text-base font-semibold "> ABOUT US</p>
          </div>

          <h1 className="text-[#0F2557] text-5xl font-extrabold py-3">
            Trusted Computer Repair Experts
          </h1>
          <p className="text-[#5C6470]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            turpis non sapien tincidunt gravida vel non ipsum. Etiam mattis eros
            tellus, ac rhoncus leo blandit id. Cras eu urna eu nibh fringilla
            egestas.
          </p>
          <h1 className="text-[#0F2557] text-3xl font-medium pt-5">
            Why Choose Us!
          </h1>
          <p className="text-[#5C6470]">
            Nunc eget purus vel sapien cursus ultrices. Praesent id leo sit amet
            turpis laoreet finibus. Quisque nec tellus tincidunt.
          </p>
        </div>
        <div className=" flex gap-28 text-[#5C6470]">
          <div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
            <div className="flex gap-3 pt-4 items-center justify-center">
              <Check className="text-[#F5A623] size-5" />
              <p>Affordable Price</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0F2557] w-full h-[160px] mt-4 rounded-sm">
          <p className="text-white text-center px-10 py-5 text-xl font-normal">
            Trusted Computer Repair Experts with{" "}
            <span className="text-[#F5A623]">25 Years of Experience</span> and
            Proven Solutions
          </p>
          <div className="bg-[#F5A623] w-[120px] h-[40px] rounded-[4px] pl-4 pt-1 text-lg mx-auto">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
