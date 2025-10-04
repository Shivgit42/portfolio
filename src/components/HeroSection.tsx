import Avatar from "@/app/(home)/components/Avatar";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import { bricolage_grotesque, inter } from "@/utils/fonts";

export default function HeroSection() {
  return (
    <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div>
          <Avatar />
        </div>
        <div className="mt-4 px-32 max-sm:px-4">
          <h1
            className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}
          >
            Hi, I&apos;m Shivam Rana
          </h1>
          <h1
            className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
          >
            i learn by building, exploring, and breaking things until they work
            - anything that pushes the limits. i love tech, football, and the
            peak engineering in cars and space, plus the history behind it all.
            <br />
            If you’re building something real and useful, let’s talk.
          </h1>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="https://cal.com/shivamr" target="_blank">
            <RainbowButton>Book a meet</RainbowButton>
          </Link>
          <RainbowButton>
            <ScrollLink
              to="contact-section"
              activeClass="active"
              smooth={true}
              offset={-120}
              duration={1100}
            >
              Get in touch
            </ScrollLink>
          </RainbowButton>
        </div>
      </div>
    </div>
  );
}
