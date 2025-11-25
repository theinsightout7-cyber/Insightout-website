// import React from 'react'
import image from '../assets/vision.jpg'
const AboutCard = () => {
  return (
    <div className='flex flex-col md:h-[500px]  container '>
        <h2 className='text-2xl font-bold text-center capitalize poppins-extrabold text-gray-800'>who we are</h2>
        <div className='flex-col md:flex-row flex justify-between gap-8 mt-8'>
            <div className='flex w-full md:w-1/2 h-full'>
                <img src={image} alt="" />
            </div>
            <article className='flex gap-y-12 flex-col w-full md:w-1/2  h-full  justify-center pr-8'>
<p>InsightOut partners with leaders across sectors to translate bold development visions into measurable impact for today and resilience for tomorrow. By combining policy expertise, technical knowledge, and results-based management, we help governments, NGOs, and businesses navigate complexity with clarity. Our purpose is to bridge the gap between ambition and achievement, enabling organizations to create meaningful, lasting change. We bring together a collaborative network of specialists and a multidisciplinary approach that integrates economic, social, and technical perspectives. From policy design and fundraising strategies to programme execution and evaluation, we provide end-to-end support that ensures initiatives are not only effective but also inclusive and future-ready.</p>

<p>
  We align local insights with global best practices, we help our partners achieve outcomes that endure beyond the lifespan of any single project.
Driven by values of integrity, innovation, and accountability, we measure our success in tangible outcomes that improve lives and strengthen institutions. We are committed to fostering equitable progress, championing sustainability, and ensuring every solution contributes to a more resilient, prosperous future for all. InsightOut doesn’t just design strategies, we bring ideas to life.
</p>
 

            </article>
        </div>
    </div>
  )
}

export default AboutCard