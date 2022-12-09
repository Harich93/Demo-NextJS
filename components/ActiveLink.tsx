import { useRouter } from "next/router";
import Link from "next/link"
import { FC } from "react";

interface Props { 
  text: string
  href: string 
  activeClass: string 
}

export const ActiveLink: FC<Props> = ({text, href, activeClass}) => {

  const { asPath } = useRouter();

  return (
    <Link href={href} className={asPath === href ? activeClass : undefined}>
      {text}
    </Link>
  )
}
