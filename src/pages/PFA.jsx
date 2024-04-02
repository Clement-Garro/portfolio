import {BlockCompetence} from "../components/components.js";
import {Allcompetences} from "../constants/index.js";
import React from "react";

const PFA = () => {
    let isImpair = false;
    return (
        <section className="max-container">
            <div className="text-center pb-5">
                <h1 className="head-text">
                    Mon{" "}
                    <span className="gradient_text drop-shadow font-semibold">
                Portfolio d'apprentissage
            </span>
                </h1>
            </div>
            {Allcompetences.map((info, index) => {
                const isImpair = info.competences.length % 2 !== 0;
                return (
                    <div key={index} className="pb-5">
                        <h2 className="gradient_text drop-shadow font-semibold subhead-text pb-5">{info.referal}</h2>
                        <div className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-5`}>
                            {info.competences.map((competence, i) => (
                                <BlockCompetence
                                    key={i}
                                    AC={competence.AC}
                                    ACtxt={competence.ACtxt}
                                    lvl={competence.lvl}
                                    Ex={competence.Ex}
                                    referal={info.referal}
                                    className={isImpair && i === info.competences.length - 1 && window.innerWidth > 640 ? "col-span-2" : ""}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default PFA;