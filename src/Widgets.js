import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {[['React JS', 'Top News - 4568 readers'],
            ['Redux', 'Top News - 3562 readers'],
            ['Javascript', 'Top News - 7991 readers'],
            ['HTML CSS', 'Top News - 568 readers'],
            ['Corona Virus', 'Top News - 21462 readers'],
            ['Programming', 'Top News - 991 readers']].map(article => newsArticle(...article))}
        </div>
    )
}

export default Widgets
