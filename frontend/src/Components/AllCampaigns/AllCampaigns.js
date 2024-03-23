import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


function AllCampaigns() {

    let [allCampaignList,setAllCampaignsList] = useState([])
    let [err,setErr] = useState('')

    function getAllCampaigns(){
        let res = axios.get('https://localhost:4000/all-campaigns') //change the fake url to actual url
        if(res.data.statusCode===9){
            setAllCampaignsList(res.data.payload)
        }else{
            setErr(res.data.message)
        }
    }

  return (
    <div>
        <div>
            {
                allCampaignList.map((campaignObj)=>(
                    <div className='col'>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllCampaigns