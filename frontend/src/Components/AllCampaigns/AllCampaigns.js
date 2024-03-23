import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CardComponent from '../cardComponent/cardComponent';


function AllCampaigns() {

    let [allCampaignList,setAllCampaignsList] = useState([{campaignTitle: "HeartSurgeryFunding",
    firstName: "Madhumitha",
    lastName: "Hatti",
    age: 20}])
    let [err,setErr] = useState('')

    function getAllCampaigns(){
        let res = axios.get('https://localhost:4000/campaigns') //change the fake url to actual url
        if(res.data.statusCode===9){
            setAllCampaignsList(res.data.payload)
        }else{
            setErr(res.data.message)
        }
    }

    useEffect(()=>{
        getAllCampaigns()
    },[allCampaignList])

  return (
    <div>
        <div>
            {
                allCampaignList.map((campaignObj)=>(
                    <div className='col m-4'>
                        <CardComponent CampaignObj={campaignObj} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllCampaigns