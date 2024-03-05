'use client'

import { Linkedin, Github} from "lucide-react"

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/amanibobo/visiondetect" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/amanibobo/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
        </div>
    );
};

export default SocialMediaLinks;