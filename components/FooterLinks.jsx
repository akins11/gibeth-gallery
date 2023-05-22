import Link from "next/link"



const FooterLinks = ({ title, path }) => {
  return (
    <li className='text-[1.2rem] mb-2 transition duration-300'>
        <Link href={path} className="hover:text-[#FCA311]">
            {title}
        </Link>
    </li>
  )
}

export default FooterLinks;

export const FooterSocial = ({ socialIcon, path}) => {
  return (
    <li className="mb-3 w-[4rem]">
      <Link href={path} className="hover:text-[#FCA311]">
        {socialIcon}
      </Link>
    </li>
  )
}
