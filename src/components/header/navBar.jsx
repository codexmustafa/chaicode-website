import React, { useState } from 'react'
import ChaicodeWhite from '../../../public/icons/chaicode-white'
import CtaButton from '../ui/ctaButton'
import SecondaryBtn from '../ui/secondaryBtn'
import { Menu, X } from 'lucide-react'
import Code from '../../../public/icons/code'
import Book from '../../../public/icons/book'
import File from '../../../public/icons/file'
import Star from '../../../public/icons/star'
import { motion, AnimatePresence } from "motion/react"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        "Cohorts",
        "Udemy",
        "Docs",
        "Reviews",
    ]
    const logoLeft = [
        <Code />,
        <Book />,
        <File />,
        <Star />
    ]

    return (
        <div className='navbar w-full px-8 py-2 bg-[#111827] flex items-center justify-between relative'>
            <div className="logo w-fit h-fit">
                <ChaicodeWhite width={120} height={60} />
            </div>
            <div className="lg:hidden block text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
            <div className="Links lg:flex lg:items-center lg:justify-center lg:gap-6 hidden text-white">
                {links.map((text, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 transition-all hover:text-[#FF7D0C]">
                        <div className="text-white hover:text-[#FF7D0C]">
                            {logoLeft[index]}
                        </div>
                        <a href={`#${text.toLowerCase()}`} className="hover:text-[#FF7D0C]">
                            {text}
                        </a>
                    </div>
                ))}
            </div>

            <div className="CTA hidden lg:block">
                <CtaButton />
            </div>

            {/* mobile menu */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: '100vh', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className='w-full lg:hidden bg-[#111827] absolute z-10 left-0 top-18 h-screen transition-all'>
                            {links.map((link, index) => (
                                <div key={index} className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-2 px-6 font-medium border-b border-white tracking-wider py-4 w-full transition-all text-white text-3xl lg:hidden'>
                                        <motion.a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-2xl font-medium hover:text-orange-400"
                                            initial={{ opacity: 0, y: -30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 * index }}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link}
                                        </motion.a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NavBar