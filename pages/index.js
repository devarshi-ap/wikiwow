import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import TimelineEvent from './components/TimelineEvent';

export default function Home() {

    const [month, setMonth] = useState("1");
    const [day, setDay] = useState(1);
    const [events, setEvents] = useState([]);

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
                <h3 className='my-4 font-mono text-[1rem] text-gray text-center'>You don&apos;t need a DeLorean to go back in time!</h3>
            </div>

            <h1 className='text-gray font-mono mt-8 p-1 text-center border border-[#000]'>
                What happened on <span className='font-bold underline'>{month.toUpperCase()}/{day}</span>?
            </h1>

            <div className="my-4 flex flex-row">
                <div className='w-1/4 flex flex-col [&>*]:bg-coolwhite text-gray [&>*]:text-center [&>*]:border [&>*]:border-black [&>*]:py-2 [&>*]:rounded-sm'>
                    <select name="month" value={month} onChange={e => setMonth(e.target.value)} required>
                        <option value="1">JAN.</option>
                        <option value="2">FEB.</option>
                        <option value="3">MAR.</option>
                        <option value="4">APR.</option>
                        <option value="5">MAY</option>
                        <option value="6">JUN.</option>
                        <option value="7">JUL.</option>
                        <option value="8">AUG.</option>
                        <option value="9">SEP.</option>
                        <option value="10">OCT.</option>
                        <option value="11">NOV.</option>
                        <option value="12">DEC.</option>
                    </select> 
                    <input type="number" name="day" min="1" max="31" value={day} onChange={e => setDay(e.target.value)} required></input>
                </div>

                <button
                    className="w-full bg-coolwhite text-gray hover:bg-dark_gray hover:text-white font-bold text-[1.25rem] hover:scale-105 transition rounded-sm duration-700 border border-1"
                    type="submit"
                >Let&apos;s have a look! 🔮</button>
            </div>
            
            <ol className="relative border-l border-gray-200 dark:border-gray-700 my-16 max-w-3xl">                  
                <TimelineEvent 
                    date="153 BC"
                    title="Julian calendar"
                    description="The Julian calendar takes effect as the civil calendar of the Roman Empire, establishing January 1 as the new date of the new year."
                    url="https://wikipedia.org/wiki/Julian_calendar"
                />
            </ol>
        </div>
    );
}