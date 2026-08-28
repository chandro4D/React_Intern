import { Clock, Mail, MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#000C22]">
      <div className="flex justify-between py-5 text-[#CCCED3] max-w-[1200px] mx-auto ">
        <div className="flex gap-6">
          <div className="flex gap-2 justify-center items-center">
            <MapPin className="text-[#FFAA19] size-5 " />
            <p > 123 Street, New York, USA</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Mail className="text-[#FFAA19] size-5" />
            <p className="hover:text-[#FFAA19]">info@example.com</p>
           
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Clock className="text-[#FFAA19] size-5" />
            <p>Mon – Fri: 09:00 am – 07:00 pm</p>
          </div>
        </div>
        <div>
          <div className="flex  justify-center items-center gap-2 flex-wrap">
            <div className="bg-[#FFAA19] text-black p-2 rounded-full ">
              <Phone />
            </div>
            <p className="hover:text-[#FFAA19]">+012 345 67890</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
