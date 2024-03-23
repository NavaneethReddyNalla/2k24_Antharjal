import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CardComponent from '../cardComponent/cardComponent';


function AllCampaigns() {

    let [allCampaignList,setAllCampaignsList] = useState([]);
    let [err,setErr] = useState('')

    async function getAllCampaigns(){
        let res = await axios.get('https://localhost:5000/campaign/campaigns') //change the fake url to actual url
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