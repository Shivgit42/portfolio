import React from "react";
import { Link, Avatar as Picture } from "@radix-ui/themes";

const Avatar = () => {
  return (
    <Link
      href="https://x.com/intent/follow?screen_name=shivamrtwt"
      target="_blank"
    >
      <Picture src="/spidey.jpeg" fallback="A" size="8" radius="full" />
    </Link>
  );
};

export default Avatar;
