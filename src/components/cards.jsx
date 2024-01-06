import imgs from './472.jpg';
import './cards.css';
export default function Cards(props) {
    return (
        <>

            <div className="card">

                <div className="card-img">
                    < img src={imgs} />
                </div>

                <div className="card-info">
                    <p className="text-title">Product title </p>
                    <p className="text-body">Product description and details</p>
                </div>

                <div className="card-footer">
                    <span className="text-title ">$499.49</span>
                </div>
            </div>

        </>
    )
};

