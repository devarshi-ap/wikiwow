import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

    // const [category, setCategory] = useState('All');
    const [month, setMonth] = useState("1");
    const [day, setDay] = useState(1);
    const [events, setEvents] = useState([]);

    // let btnGrid = ['All', 'Politics', 'Economics', 'Business', 'Tech', 'Science', 'Sports', 'Art', 'People', 'Misc'].map((label, index) => (
    //     <div className={`text-white transition-all duration-500 bg-gradient-to-tl to-[#09203F] from-skyblue bg-size-200 bg-pos-0 hover:bg-pos-100`} key={index} onClick={e => setCategory(label)}>{label}</div>
    // ))

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

            {/* <div className="grid grid-cols-4 gap-2 text-center font-mono rounded-md [&>*]:p-1 [&>*]:rounded-md">
                {btnGrid}
            </div> */}

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
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-black"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                </li>
            </ol>
        </div>
    );
}