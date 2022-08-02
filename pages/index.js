import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import TimelineEvent from './components/TimelineEvent';

export default function Home() {
    const [month, setMonth] = useState('1');
    const [day, setDay] = useState(1);
    const [totalEvents, setTotalEvents] = useState([]);
    const [events, setEvents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${month}/${day}`);

        axios
            .get(`https://history.muffinlabs.com/date/${month}/${day}`)
            .then((res) => {
                console.log(res.data.data.Events.slice(0, 5));
                setTotalEvents(res.data.data.Events);
                setEvents(res.data.data.Events.slice(0, 5));
            })
            .catch((err) => console.log(err));
    };

    const eventElements = events.map((ev, index) => (
        <TimelineEvent
            date={ev.year}
            title={ev.links[0].title}
            description={ev.text}
            url={ev.links[0].link}
            key={index}
        />
    ));

    const addEvents = () => {
        setEvents(totalEvents.slice(0, events.length + 5));
    };

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
                <h1 className="text-gray text-[3rem] underline font-RobotoMono text-center">
                    Wikiwow!
                </h1>
                <h3 className="my-4 font-mono text-[1rem] text-gray text-center">
                    You don&apos;t need a DeLorean to go back in time!
                </h3>
            </div>

            <h1 className="text-gray font-mono mt-8 p-1 text-center border border-[#000]">
                What happened on{' '}
                <span className="font-bold underline">
                    {month.toUpperCase()}/{day}
                </span>
                ?
            </h1>

            <form onSubmit={handleSubmit} className="my-4 flex flex-row">
                <div className="w-1/4 flex flex-col [&>*]:bg-coolwhite text-gray [&>*]:text-center [&>*]:border [&>*]:border-black [&>*]:py-2 [&>*]:rounded-sm">
                    <select
                        name="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                    >
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
                    <input
                        type="number"
                        name="day"
                        min="1"
                        max="31"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                    ></input>
                </div>

                <button
                    className="w-full bg-coolwhite text-gray hover:bg-dark_gray hover:text-white font-bold text-[1.25rem] hover:scale-105 transition rounded-sm duration-700 border border-1"
                    type="submit"
                >
                    Let&apos;s have a look! 🔮
                </button>
            </form>

            <ol className="relative border-l border-gray my-16 max-w-3xl">
                {eventElements}
            </ol>

            {events.length > 0 && events.length < totalEvents.length && (
                <button
                    className="border border-1 rounded-2xl w-fit p-2 mx-auto bg-brown text-white font-RobotoMono animate-hover"
                    onClick={addEvents}
                >
                    See More
                </button>
            )}
            <h1
                className="w-fit mx-auto text-orange text-sm my-3 font-RobotoMono underline"
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
            >
                Welcome back to the future!
                <br />
                Psst...click me jump to top!
            </h1>
        </div>
    );
}
