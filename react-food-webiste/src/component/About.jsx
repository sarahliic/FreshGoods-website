import React from 'react'

function About() {
  return (
    <div className='flex justify-center items-center flex-col min-h-[100vh] min-h-screen w-[100%]'>
        <div className='flex justify-center items-center w-[70%] gap[30px] max-sm:flex-col'>
            <div className='mt-[2rem]'>
            <img className='' src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" alt="about-img" />
            </div>
            <div className='flex flex-col gap-y-[30px] justify-center w-[50%] '>
                <p className=' text-[#304847] font-normal text-4xl pl-4 max-sm:w-[200%] '>Some more <br />information about <br /> your business</p>
                <p className='text-justify w-[90%] pl-4 max-sm:w-[150%] max-sm:p-0'>Share a little about yourself as a business owner, or maybe describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you.;</p>
            </div>
        </div>
    </div>
  )
}

export default About