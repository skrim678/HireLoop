
import Image from "next/image";
import global from "@/images/globe.png";

const stats = [
  {
    icon: "♧",
    number: "50K",
    title: "Active Jobs",
  },
  {
    icon: "▥",
    number: "12K",
    title: "Companies",
  },
  {
    icon: "◎",
    number: "2M",
    title: "Job Seekers",
  },
  {
    icon: "☆",
    number: "97%",
    title: "Satisfaction Rate",
  },
];

const StatsSection = () => {
  return (
    <section className="relative min-h-[340px] overflow-hidden bg-transparent px-5 pt-28 pb-12">

      {/* Globe Background Image */}
      <div className="absolute inset-0">
        <Image
          src={global}
          alt="Global background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-xl pb-8 text-center">

          <h2 className="text-xl font-medium leading-snug text-white md:text-2xl">
            Assisting over{" "}
            <span className="font-semibold">
              15,000 job seekers
            </span>
            <br />
            find their dream positions.
          </h2>

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex h-[95px] flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-black to-[#1b1b1b] p-3 transition duration-300 hover:-translate-y-1 md:h-[95px] md:p-4"
            >

              {/* Icon */}
              <span className="text-sm text-white">
                {stat.icon}
              </span>

              {/* Number and Title */}
              <div>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">
                  {stat.number}
                </h3>

                <p className="mt-1 text-[10px] text-gray-300">
                  {stat.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsSection;
