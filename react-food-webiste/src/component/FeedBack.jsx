import React from 'react'
import Comma from "../assets/comma.png"
import Rating from "../assets/starts.png"
function FeedBack() {
  return (
    <div className="bg-[url('https://lying-move-262.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F69d3b502-87ee-4689-8097-3171d8f07c07%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=cd60fb4a-9f52-41cc-af20-1716ed4e8a7d&spaceId=69d3b502-87ee-4689-8097-3171d8f07c07&width=1440&userId=&cache=v2')] h-[100vh] w-[100%] ">
        <div className='text-white  grid  items-center'>
            <div className='flex flex-col items-center justify-center  gap-y-[30px] h-[100vh]'>
        <div>
            <p className='font-bold'>What our customers say</p>
        </div>
        <div>
            <img src={Comma} alt="" />
        </div>
        <div className='italic font-normal text-4xl text-center'>Share a real testimonial that hits some of <br /> your benefits (but isn't too sales-y).</div>
        {/* Customer info */}
        <div className='flex flex-col justify-center items-center '>
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png" alt="person-img" />
            <p className='text-center'>David Litno, <br /> US</p>
            <img src={Rating} alt="rating-img" className='w-[25%]'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FeedBack