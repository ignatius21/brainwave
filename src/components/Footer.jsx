import Section from "./Section"
import {socials} from '../constants'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-2 lg:block">{new Date().getFullYear()} All rights reserved.</p>
            <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                    <a key={item.id} href={item.url} target="_blank" className="flex justify-center w-10 h-10 rounded-full items-center bg-n-7 transition-colors hover:bg-n-6">
                        <img src={item.iconUrl} alt={item.name} className="w-5 h-5" width={16} height={16} />
                    </a>                    
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer