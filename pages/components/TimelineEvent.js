{/* <Image src={thumbnails[0]} height="150px" width="200px" alt="thumbnail"/> */}
import { useState } from 'react';
import { BsYoutube } from 'react-icons/bs'
var search = require('youtube-search');


var opts = {
    maxResults: 2,
    key: 'AIzaSyDIvGPePKarjXHLQxfDFBh892tRvgns4jw',
};

export default function TimelineEvent({evnt_date, title, description, url}) {

    const [videos, setVideos] = useState([])
    const [showVids, setShowVids] = useState(false);
    // const [thumbnails, setThumbnails] = useState([])

    const searchVideo = () => {
        search(title, opts, function (err, results) {
            if (err) return console.log(err);
            setVideos([results[0], results[1]]);
            // setThumbnails([results[0].thumbnails.high.url, results[1].thumbnails.high.url])
        });
        setShowVids(!showVids);
    }

    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-orange border border-black"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray">{evnt_date}</time>
            <h3 className="text-lg mb-2 font-semibold text-dark_gray" data-cy="evnt-title">{title}</h3>
            <p className="mb-4 mt-1 text-base font-normal text-gray" onClick={searchVideo}>{description}</p>
            <a href={url} className="inline-flex items-center py-2 px-4 text-sm font-medium text-dark_gray bg-white rounded-lg border border-gray hover:bg-gradient-to-tl focus:z-10 focus:ring-4 focus:outline-none focus:text-blue">Learn more ⇗</a>
            <button className="inline-flex items-center py-2 px-4 ml-4 text-sm font-medium text-dark_gray bg-white rounded-lg border border-gray hover:bg-gradient-to-tl focus:z-10 focus:ring-4 focus:outline-none focus:text-blue" onClick={searchVideo}>{showVids ? "Hide" : "Find"} Videos <BsYoutube className="text-xl ml-2"/></button>
            
            {videos.length > 0 && showVids && (
                <ol className='border border-1 rounded-md w-fit p-4 mt-4 bg-white font-semibold text-sm text-blue'>
                    <li className='mb-4'>
                        ‣ <a href={videos[0].link} className="underline">{videos[0].title}</a>
                    </li>
                    <li>
                        ‣ <a href={videos[1].link} className="underline">{videos[1].title}</a>
                    </li>
                </ol>
            )}
        </li>
    )
}
