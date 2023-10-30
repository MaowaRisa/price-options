import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import { Audio, Hourglass } from  'react-loader-spinner'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=> {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData)
            setLoading(false);
        })
    }, [])
    return (
        <div>
            {
                loading && <div className="flex gap-4">
                                <Audio
                                    height = "80"
                                    width = "80"
                                    radius = "9"
                                    color = 'green'
                                    ariaLabel = 'three-dots-loading'     
                                    wrapperStyle
                                    wrapperClass
                                />
                                <Hourglass
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="hourglass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    colors={['#306cce', '#72a1ed']}
                                />
                            </div>
            }
            
            <h1 className="text-5xl">Total Phones: {phones.length}</h1>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#006252" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;