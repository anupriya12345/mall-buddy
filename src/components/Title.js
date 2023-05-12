import home from '../images/homeImg.jpg'

const Title = () => {
    return (
        <div>
            <img className="homeImg" src={home} alt="home" width="100%" height="500" style={{ opacity: 0.8 }} />
            <p className='carousel-caption text-over-img'>Explore Top cities & Their best shopping malls</p>

        </div>
    );
}

export default Title;

