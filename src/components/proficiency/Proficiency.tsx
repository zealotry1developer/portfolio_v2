import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useScreenSizes from '../../hooks/useWindowSize/';
import SkillProficientBar from '../utils/skillProficientBar';
import {
  MORE_SKILLS_LISTS,
  MAIN_LEFT_SKILLS_LISTS,
  MAIN_RIGHT_SKILLS_LISTS,
} from '../../utils/constants';
import {
  HorizontalCommonVariants,
  VerticalCommonVariants,
} from '../../utils/framerVariants';

const Stats = () => {
  const [isSmall, isMedium] = useScreenSizes();
  const [mounted, setMounted] = useState(false);
  const verticalVarientSkills = VerticalCommonVariants(60, 6, 0, 0);
  const leftVarientSkills = HorizontalCommonVariants(-40, 0, 0, 0.2);
  const rightVarientSkills = HorizontalCommonVariants(40, 0, 0, 0.2);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section
      className='scrollbar-hidden flex justify-center items-center
            2xl:max-w-[100rem] 2xl:mx-auto'
    >
      {/* container */}
      <div
        className='relative flex flex-col items-center border-2 border-[#e7edf7] bg-white gap-16 rounded-2xl
                  -top-20 px-3
                  xsm:px-6 xsm:-top-24
                  sm:px-6
                  md:-top-20 md:px-9
                  lg:-top-24 lg:px-16
                  2xl:px-20
                  '
      >
        {/* header */}
        <div className='mt-3 sm:mt-6 md:mt-9 lg:mt-12'>
          <motion.h1
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-2xl'
          >
            Proficiency.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-primary h-[0.2rem] w-20 sm:w-32 rounded-xl drop-shadow-2xl' />
          </motion.div>
        </div>

        {/* body - skill proficient bars */}
        <div className='flex flex-col gap-12 mb-6 sm:mb-9 md:mb-12 lg:mb-12'>
          {/* @notice main skills for mobile screens */}
          {!isSmall ? (
            <div className='flex flex-col gap-12 sm:flex-row sm:gap-9'>
              {/* top skills */}
              <motion.div
                initial='hidden'
                whileInView='shown'
                viewport={{
                  amount: 'some',
                  margin: '100% 0% -9% 0%',
                }}
                variants={verticalVarientSkills}
                className='flex flex-col gap-12'
              >
                {/* @NOTICE: As `left` attributes on <SkillProficientBar> component can only be triggered from small screen size (i.e. 640px), 
            use `isSmall` state as the value for `left` attribute*/}
                {MAIN_LEFT_SKILLS_LISTS.map((tech) => {
                  return (
                    <motion.div variants={verticalVarientSkills}>
                      <SkillProficientBar
                        value={tech.value}
                        logo={tech.techology}
                        techLink={tech.techLink}
                      />
                    </motion.div>
                  );
                })}

                {/* bottom skills  */}
                {MAIN_RIGHT_SKILLS_LISTS.map((tech) => {
                  return (
                    <motion.div variants={verticalVarientSkills}>
                      <SkillProficientBar
                        value={tech.value}
                        logo={tech.techology}
                        techLink={tech.techLink}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ) : (
            // @notice main skills for small and bigger screens
            <div className='flex flex-col gap-12 sm:flex-row sm:gap-9'>
              {/* left skills */}
              <div>
                <motion.div
                  initial='hidden'
                  whileInView='shown'
                  viewport={{
                    amount: 'some',
                    margin: '100% 0% -9% 0%',
                  }}
                  variants={leftVarientSkills}
                  className='flex flex-col gap-12'
                >
                  {/* @NOTICE: As `left` attributes on <SkillProficientBar> component can only be triggered from small screen size (i.e. 640px), 
            use `isSmall` state as the value for `left` attribute*/}
                  {MAIN_LEFT_SKILLS_LISTS.map((tech) => {
                    return (
                      <motion.div variants={leftVarientSkills}>
                        <SkillProficientBar
                          value={tech.value}
                          logo={tech.techology}
                          techLink={tech.techLink}
                          left={true}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* right skills */}
              <motion.div
                initial='hidden'
                whileInView='shown'
                viewport={{
                  amount: 'some',
                  margin: '100% 0% -9% 0%',
                }}
                variants={rightVarientSkills}
                className='flex flex-col gap-12'
              >
                {MAIN_RIGHT_SKILLS_LISTS.map((tech) => {
                  return (
                    <motion.div variants={rightVarientSkills}>
                      <SkillProficientBar
                        value={tech.value}
                        logo={tech.techology}
                        techLink={tech.techLink}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}

          {/* more skills */}
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              {MORE_SKILLS_LISTS.slice(0, isMedium ? 12 : isSmall ? 6 : 4).map(
                (tech) => {
                  return (
                    <a
                      href={tech.techLink}
                      target='_blank'
                      title={tech.techology}
                      className='flex items-center cursor-pointer'
                    >
                      <img
                        src={`src/assets/tech_logos/${tech.techology.toLowerCase()}.svg`}
                        alt={`${tech.techology}-logo`}
                        className={`hover:scale-110 transition duration-300 select-none`}
                      />
                    </a>
                  );
                }
              )}
            </div>

            {!isMedium && (
              <div className='flex justify-between'>
                {MORE_SKILLS_LISTS.slice(isSmall ? 6 : 4, isSmall ? 12 : 8).map(
                  (tech) => {
                    return (
                      <a
                        href={tech.techLink}
                        target='_blank'
                        title={tech.techology}
                        className='flex items-center cursor-pointer'
                      >
                        <img
                          src={`src/assets/tech_logos/${tech.techology.toLowerCase()}.svg`}
                          alt={`${tech.techology}-logo`}
                          className={`hover:scale-110 transition duration-300 select-none`}
                        />
                      </a>
                    );
                  }
                )}
              </div>
            )}

            {!isSmall && (
              <div className='flex justify-between'>
                {MORE_SKILLS_LISTS.slice(8, 12).map((tech) => {
                  return (
                    <a
                      href={tech.techLink}
                      target='_blank'
                      title={tech.techology}
                      className='flex items-center cursor-pointer'
                    >
                      <img
                        src={`src/assets/tech_logos/${tech.techology.toLowerCase()}.svg`}
                        alt={`${tech.techology}-logo`}
                        className={`hover:scale-110 transition duration-300 select-none`}
                      />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
