import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

    const [category, setCategory] = useState('All');
    const [month, setMonth] = useState('jan');
    const [day, setDay] = useState(1);

    let btnGrid = ['All', 'Politics', 'Economics', 'Business', 'Tech', 'Science', 'Sports', 'Art', 'People', 'Misc'].map((label, index) => (
        <div className={`text-white transition-all duration-500 bg-gradient-to-tl to-[#09203F] from-skyblue bg-size-200 bg-pos-0 hover:bg-pos-100`} key={index} onClick={e => setCategory(label)}>{label}</div>
    ))

    return (
        <div className="grid place-content-center bg-coolwhite min-h-screen py-5">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 40,
                    delay: 0.5,
                }}
                className="w-fit mx-auto mb-7 mt-3"
            >
                <Image
                    src="/wikiglobe.png"
                    alt="wiki globe"
                    height="200px"
                    width="200px"
                />
            </motion.div>

            <div>
                <h1 className="text-gray text-[3rem] underline font-RobotoMono text-center">Wikiwow!</h1>
                <h3 className='my-4 font-mono text-[1rem] text-gray'>You don&apos;t need a DeLorean to go back in time!</h3>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center font-mono rounded-md [&>*]:p-1 [&>*]:rounded-md">
                {btnGrid}
            </div>

            <h1 className='text-gray font-mono mt-8 p-1 text-center border border-[#000]'>
                What happened on <span className='font-bold underline'>{month.toUpperCase()}/{day}</span> in <span className='font-bold underline'>Category:{category}</span>?
            </h1>

            <div className="my-4 flex flex-row">
                <div className='w-1/4 flex flex-col [&>*]:bg-coolwhite text-gray [&>*]:text-center [&>*]:border [&>*]:border-black [&>*]:py-2 [&>*]:rounded-sm'>
                    <select name="month" value={month} onChange={e => setMonth(e.target.value)} required>
                        <option value="jan">JAN.</option>
                        <option value="feb">FEB.</option>
                        <option value="mar">MAR.</option>
                        <option value="apr">APR.</option>
                        <option value="may">MAY</option>
                        <option value="jun">JUN.</option>
                        <option value="jul">JUL.</option>
                        <option value="aug">AUG.</option>
                        <option value="sep">SEP.</option>
                        <option value="oct">OCT.</option>
                        <option value="nov">NOV.</option>
                        <option value="dec">DEC.</option>
                    </select> 
                    <input type="number" name="day" min="1" max="31" value={day} onChange={e => setDay(e.target.value)} required></input>
                </div>

                <button
                    className="w-full bg-coolwhite text-gray hover:bg-dark_gray hover:text-white font-bold text-[1.25rem] hover:scale-105 transition rounded-sm duration-700 border border-1"
                    type="submit"
                >Let&apos;s have a look! 🔮</button>
            </div>
            

        </div>
    );
}
