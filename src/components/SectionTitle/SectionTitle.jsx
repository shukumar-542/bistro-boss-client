
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-16 mb-12 w-3/12 mx-auto">
            <p className="text-yellow-500 py-4">----{heading}----</p>
            <h3 className="text-3xl border-y-2 p-6">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;