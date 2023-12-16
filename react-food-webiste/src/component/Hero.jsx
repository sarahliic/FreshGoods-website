import React from 'react'

function Hero() {
  return (
    <div className="bg-[url('https://lying-move-262.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F69d3b502-87ee-4689-8097-3171d8f07c07%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=ed65f816-ff9e-43a2-a201-1c12a5fdd0dc&spaceId=69d3b502-87ee-4689-8097-3171d8f07c07&width=1440&userId=&cache=v2')] bg-cover bg-center bg-no-repeat w-[100%] min-h-[100vh] pb-4 relative">
        <div className="absolute top-[20%] left-[15%] text-white max-sm:top-[7%] ">
        <h2 className="italic font-thin text-3xl mb-3">FreshGoods</h2>
        <p className="font-light text-5xl leading-tight ">Concisely <br /> describe your <br />product or service</p>
        <p className="font-medium mt-7 max-sm: text-justify w-[80%]">No need to get  clever is simply dummy text of the printing and typesetting industry. industry <br /> Lorem Ipsum has been the industry's stanown printer took a galley a type </p>
        <button className="bg-[#FFB400] mt-12 p-1 font-bold w-[25%] rounded-md cursor-pointer text-[#000] max-sm:w-[50%] p-2 max-sm:mt-4">ORDER NOW</button>
        </div>
    </div>
  )
}

export default Hero