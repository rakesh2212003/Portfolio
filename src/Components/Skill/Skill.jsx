import React, { useState } from 'react'
import "./Skill.css";
import SkillMenu from "./SkillMenu";

const Skill = () => {

    const [items, setItems] = useState(SkillMenu);

    const filterItem = (categoryItem) => {
        const updateItems = SkillMenu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updateItems);
    }

    return (
        <section className="SKILL container section" id="skill">
            <h2 className="section_title">Skills</h2>

            <div className="skill_filters">
                <span className="work_item" onClick={() => setItems(SkillMenu)}>All</span>
                <span className="skill_item" onClick={() => filterItem("frontend")}>FrontEnd</span>
                <span className="skill_item" onClick={() => filterItem("backend")}>BackEnd</span>
                <span className="skill_item" onClick={() => filterItem("database")}>Database</span>
                <span className="skill_item" onClick={() => filterItem("language")}>Language</span>
            </div>

            <div className="skill_container grid">
                { items.map((elem) => {
                    const{ id, image } = elem;
                    return (
                        <div className="skill_card" key={ id }>
                            <img src={ image } alt="" className="skill_img" />
                        </div>
                    )
                }) }
            </div>

        </section>
    )
}

export default Skill