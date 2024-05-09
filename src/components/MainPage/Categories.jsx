import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Mobiles & Tablets",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Tv's & Electronics",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Laptop & Accessories",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Computer & Peripherals",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Smart Technology",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Mobile Accessories",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Power Bank",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Earbuds",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Speaker",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Watches",
    },
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
