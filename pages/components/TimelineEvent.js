export default function TimelineEvent({evnt_date, title, description, url}) {
    
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-orange border border-black"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray">{evnt_date.indexOf("BC") !== -1 ? evnt_date : evnt_date + " AD"}</time>
            <h3 className="text-lg mb-2 font-semibold text-dark_gray" data-cy="evnt-title">{title}</h3>
            <p className="mb-4 mt-1 text-base font-normal text-gray">{description}</p>
            <a href={url} className="inline-flex items-center py-2 px-4 text-sm font-medium text-dark_gray bg-white rounded-lg border border-gray hover:bg-gradient-to-tl focus:z-10 focus:ring-4 focus:outline-none focus:text-blue">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
        </li>
    )
}