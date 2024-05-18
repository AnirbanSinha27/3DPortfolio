import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { educations } from "../constants";
import {fadeIn,textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const EducationCard = ({ index, title, school_name, icon, date, percentage, stream, link }) => (
    <motion.div variants={fadeIn("up", "spring",0.5*index, 0.75)}>
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary p-5 border-2 border-customBorderColor rounded-2xl sm:w-[340px] md:h-[400px] h-[420px]'
        >
            <div className="relative w-full h-auto flex flex-col items-center justify-center">
                <div className="text-center mt-4">
                    <h3 className="text-white text-[24px] font-bold">{title}</h3>
                </div>
                <div className="w-[80px] h-[80px] bg-[#E6DEDD] rounded-full flex justify-center items-center mt-5">
                    <Link to={link} className="w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer">
                        <img src={icon} alt="icon" className="w-full h-full object-contain" />
                    </Link>
                </div>
                <div className="text-center mt-4">
                    <p className='text-secondary text-[15px] font-semibold' style={{ margin: 0 }}>{school_name}</p>
                    <p><em className="text-[13px] text-secondary">{date}</em></p>
                </div>
            </div>
            <div className="mt-7 text-white font-bold text-[16px]">
                <ul className="list-disc pl-5">
                    <li>{`Stream:`} &nbsp;<span className="text-fuchsia-300">{stream}</span></li>
                    <li>{`Percentage:`}&nbsp;<span className="text-fuchsia-300">{percentage}</span></li>
                </ul>
            </div>
        </Tilt>
    </motion.div>
);


const Education = () => {
    return (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I have studied so far</p>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
          <div className="mt-20 flex flex-wrap gap-7">
              {educations.map((education,index)=>(
                <EducationCard key={index} index={index} {...education}/>
              ))}
          </div>
        </>
      )
}

export default SectionWrapper(Education,"")
