import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt={title}
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>About </p>
                <h2 className={styles.sectionHeadText}>ETHERFi.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                ETHERFi is pioneering a new era of digital storage solutions by
                blending the robust security of blockchain technology with the
                innovative use of cryptocurrency. This unique platform enables
                users to increase their storage by simply holding a specific
                crypto token. It combines the best features of traditional cloud
                storage systems with the transformational power of digital
                currencies. Innovative Integration Adding to its innovative
                design, ETHERFi has successfully integrated with Telegram. This
                feature allows users to effortlessly upload files via the
                Telegram bot, making files instantly available on the ETHERFi
                network. This integration not only streamlines the upload
                process but also leverages Telegram’s extensive user network,
                enhancing accessibility and user engagement.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
