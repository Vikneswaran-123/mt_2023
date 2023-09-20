import React, { useEffect, useState } from "react"
import axios from "axios"
import imgBanner from "../../assets/image.svg"

const Home = () => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios({
      url: "https://restcountries.com/v2/all?fields=name,region,flag",
      method: "GET",
    })
      .then((res) => {
        console.log("Response", res.data)
        setCountry(res.data)
      })
      .catch((err) => {
        console.log(err, "Error")
      })
  }

  return (
    <>
      <h1 className=" flex justify-start pt-16 pl-36 font-notosanSemi text-2xl opacity-90 ">
        Countries
      </h1>
      <div className=" grid grid-cols-1 px-32 lg: grid-cols-2 md:grid-cols-2  pt-10 gap-4">
        {country.map((item) => {
          return (
            <div className="border-4 flex flex-row	 shadow-2xl  border-black p-3">
              <div>
                <img src={imgBanner} alt="error" />
              </div>
              <div className="pl-10">
                <div className="font-notosanSemi text-2xl opacity-90">
                  {item.name}
                </div>
                <div className="font-notosanSemi text-lg text-black opacity-70 flex justify-start">
                  {item.region}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
