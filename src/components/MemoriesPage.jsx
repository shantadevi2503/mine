import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./styles.js";
import { experiences } from "./constants"; // Ensure the import path is correct
import { SectionWrapper } from "./hoc/index.js";
import { textVariant } from "./utils/motion.js";

const MemoriesPage = ({ experience }) => {
    // Check if experience is defined
    if (!experience) {
        console.error("Experience is undefined");
        return null; // Prevent rendering if experience is undefined
    }

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#a6c0fe",
                color: "black",
                font: 'bold',
            }}
            contentArrowStyle={{ borderRight: "10px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-black font-bold text-[24px] '>{experience.title}</h3>
                <p
                    className='text-black text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-black text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>

            {/* <button className="mt-2 text-black"> Read More </button> */}
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate('/home');
    }

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center `}>
                    Our Memories
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <div className="relative">
                    <button className="text-black font-extrabold text-lg uppercase bg-none ml-20 border-none focus:outline-none relative cursor-pointer transition-all duration-400 ease-out hover:text-white after:absolute after:content-[''] after:h-[2px] after:bg-white after:left-1/2 after:bottom-[-2px] after:w-0 after:transition-all after:duration-400 hover:after:left-0 hover:after:w-full " onClick={handleBackClick}>
                        &larr; Back
                    </button>
                </div>

                <VerticalTimeline>
                    {experiences && experiences.length > 0 ? (
                        experiences.map((experience, index) => (
                            <MemoriesPage
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))
                    ) : (
                        <p>No experiences found.</p>
                    )}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Experience;
