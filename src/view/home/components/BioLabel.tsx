


const BioLabel = (data:any) => {
    return (
        <div className="pt-5 text-center">
            <p>{data.data.fullname}</p>
            <p>{data.data.bio}</p>
        </div>
    );
}

export default BioLabel