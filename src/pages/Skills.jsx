import React, { Suspense } from 'react';
import Skill from './Skill';

const Skills = ({data}) => {
    console.log(data);
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Skills</h1>
            <Suspense fallback={<h1>loading...</h1>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {data.map((skill)=><Skill key={skill.skillId} skill={skill}></Skill>)}
            </div>
            </Suspense>
        </div>
    );
};

export default Skills;