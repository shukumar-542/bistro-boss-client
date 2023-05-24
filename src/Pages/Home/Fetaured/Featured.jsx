import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import fetaureImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="feature-item bg-fixed bg-opacity-60 bg-black pt-8 my-20">
            <SectionTitle
                subHeading={'check it out'}
                heading={'featured Item'}
            ></SectionTitle>

            <div className="flex justify-center items-center gap-10 pb-20 pt-12 px-36 text-white ">
                <div>
                    <img src={fetaureImg} alt="" />
                </div>
                <div>
                    <p>Aug 29, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Porro, aliquam. Harum saepe minus necessitatibus
                        expedita cumque illo ad quos. Ipsum earum quae ea tempora numquam
                        consectetur temporibus voluptates praesentium enim dolores voluptate
                        nostrum deserunt ipsa in aperiam libero amet sed, possimus odio animi
                        adipisci dolore voluptatum? Tenetur impedit labore explicabo!</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;