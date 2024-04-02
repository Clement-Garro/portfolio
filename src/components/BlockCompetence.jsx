const BlockCompetence = ({AC,ACtxt,lvl,Ex,className}) => {
    return (
        <div className={`mt-3 flex flex-col w-375 p-5 overflow-x-scroll neo-brutalism-gray gap-5 justify-center justify-items-start ${className}`}>
            <p>
                <b>
                    {AC} : {ACtxt}
                </b>
            </p>
            <span>Niveau estimé : {lvl}</span>
            <p>
                Ex : {Ex}
            </p>
        </div>
    );
}

export default BlockCompetence;