const BlockCompetence = ({AC,ACtxt,lvl,Ex,className}) => {
    return (
        <div className={`mt-3 flex flex-col w-375 mt-20 pb-5 pr-10 pl-5 pt-5 neo-brutalism-gray gap-5 justify-center justify-items-start ${className}`}>
            <p>
                <b>
                    AC{AC} : {ACtxt}
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