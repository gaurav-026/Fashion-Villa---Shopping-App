'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SimpleImageSlider from "react-simple-image-slider";
import { addItems } from '@/slices/ItemSlice';
import Spinner from './Spinner';
import Product from '@/components/Product';
import Timer from '../../components/Timer'
import banner from "../../../public/images/banner.png"
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import CarouselImage from '@/components/Carousel';
const images = [
  { url: "/images/img1.jpg" },
  { url: "/images/img2.jpg" },
  { url: "/images/img3.jpg" },
  { url: "/images/img4.jpg" },
  { url: "/images/img5.jpg" }
];

const categories = [
  {
    id: 1,
    category: "Furniture",
    url: "/images/furniture.jpg"
  },
  {
    id: 2,
    category: "Gym",
    url: "/images/gym.jpg"
  },
  {
    id: 3,
    category: "Watches",
    url: "/images/watch.jpg"
  },
  {
    id: 4,
    category: "Perfumes",
    url: "/images/perfume.jpg"
  },
  {
    id: 5,
    category: "Instruments",
    url: "/images/instruments.jpg"
  },
  {
    id: 6,
    category: "Toys",
    url: "/images/toys.jpg"
  },


]

const First = () => {


  // Adding a public api for products 
  const API_URL = "https://fakestoreapi.com/products";
  //Loading states to show loading
  const [loading, setLoading] = useState(false);
  //Using FetchedData state to store the api data
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();
  const { itemsList } = useSelector((state) => state.items);
  console.log("items list is", itemsList);
  //function to fetch api
  const fetchAPIData = async () => {
    //set the loading true during fetching
    if (itemsList.length > 0) return;
    setLoading(true);
    try {
      //fetch the api
      const response = await fetch(API_URL);
      const result = await response.json();
      //store the api data in fetchedData state
      setFetchedData(result);
      //saving the result in redux store
      dispatch(addItems(result));

    }
    catch (error) {
      console.log("Error while fetching api", error);

      setFetchedData([]);
      setLoading(false);
    }
    //set the loading false when fetching is completed
    setLoading(false);

  }

  //for re-rendering on the UI we are using useEffect hook
  useEffect(() => {
    fetchAPIData();
  }, []);

  // useEffect(() => {
  //   console.log(fetchedData)
  // }, [fetchedData])

  return (
    <div>
      {
        loading ? (<Spinner />) : (
          <>
          
          <div className='flex flex-col my-10 gap-10'>
          <div className='lg:mx-10 md:mx-10 mx-8 hidden lg:block'>
              {/* slider  */}
          <CarouselImage/>
            </div>
            
            {/* Category section  */}
            <div className=' flex flex-col gap-10 lg:mx-10 md:mx-10 mx-8 '>
              <div className='bg-cardBackground flex flex-col gap-6 lg:px-10 px-5 lg:py-8 py-5'>
                <h1 className='lg:text-3xl text-2xl flex gap-4 font-semibold'>
                  <div className='lg:h-[40px] w-[5px] bg-blue items-center rounded-md'></div>
                  <div>Our Categories</div>
                </h1>
                <div className='flex justify-evenly flex-wrap'>
                  {categories.map((item, index) => (
                    <div key={index} className='flex flex-col gap-4 p-2 items-center font-medium'>
                      <Image
                        src={item.url}
                        alt='category'
                        height={100}
                        width={100}
                        className='rounded-full'
                      />
                      <span>{item.category}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            {/* best seller  */}
            <div className=' flex flex-col gap-10 lg:mx-10 md:mx-10 mx-8 '>
              <div className='bg-cardBackground flex flex-col gap-6 lg:px-10 lg:py-8 p-5'>
                <h1 className='lg:text-3xl text-2xl flex gap-4 font-semibold'>
                  <div className='lg:h-[40px] w-[5px] bg-blue items-center rounded-md'></div>
                  <div>Our Best Seller</div>
                </h1>
                <div className='w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 gap-y-8'>
                  {itemsList.map((item, index) => (
                    item.rating.rate > 4.1 ? (
                      <div key={index} >
                        <Product product={item} />
                      </div>
                    ) : null
                  ))}
                </div>
              </div>
            </div>

            {/* limited time offer  */}
            <div className='flex flex-col gap-10 lg:mx-10 md:mx-10 mx-8 '>
              <div className='bg-cardBackground flex lg:flex-row flex-col '>
                <Image
                  src={banner}
                  alt={banner}
                  layout="responsive" // Adjusts image size responsively
                  width={'300px'} // Set your aspect ratio width percentage
                  height={'250px'} // Set your aspect ratio height percentage
                  style={{
                    maxWidth: '100%',
                    height: 'auto', // Automatically adjusts height
                  }}
                />
                <div className="bg-hovercardBackground w-full flex flex-col lg:gap-6 gap-4 justify-center lg:px-20 md:px-10 px-5 py-5">
                  <div className="flex flex-col gap-3">
                    <div className='text-blue font-semibold text-xl'>LIMITED EDITION</div>
                    <div className='text-grey font-medium lg:text-4xl text-3xl'>Hurry up! 30% OFF</div>
                    <div className='text-lg'>The World’s #1 Sports Nutrition Brand</div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className='text-lg'>Offer Expires in</div>
                    <div>
                      <Timer />
                    </div>
                    <div className='bg-blue font-medium px-4 py-2 rounded-md w-fit text-lg text-white cursor-pointer hover:bg-darkblue'>Shop Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* need help  */}
            <div className=' flex flex-col gap-10 lg:mx-10 md:mx-10 mx-8 '>
              <div className='flex lg:flex-row md:flex-row flex-col justify-center lg:gap-40 md:gap-20 gap-10'>
                <div className='flex flex-col gap-4 bg-blue rounded-md p-6'>
                  <div className='text-white font-semibold text-xl'>Need Help?</div>
                  <div>
                    <div className='text-white text-lg'>Mail us &gt; &gt; xyz@gmail.com</div>
                    <div className='text-white text-lg flex items-center'><HiOutlineInformationCircle size={25} /> &nbsp; &gt; FAQs </div>
                  </div>
                  <div className='bg-blue font-medium px-3 py-2 rounded-md w-fit text-lg text-blue cursor-pointer bg-white rounded-md px-8 py-2 w-full text-center'>Help Center</div>
                </div>
                <div className='flex flex-col gap-6 items-center justify-center'>
                  <div className=' font-semibold text-2xl'>Contact Us</div>
                  <div className='flex gap-4'>
                    <div className='p-3 bg-white rounded-full drop-shadow-lg hover:drop-shadow-xl'><FaInstagram size={40} color='brown' /></div>
                    <div className='p-3 bg-white rounded-full drop-shadow-lg hover:drop-shadow-xl'><FaFacebook size={40} color='blue' /></div>
                    <div className='p-3 bg-white rounded-full drop-shadow-lg hover:drop-shadow-xl'><FaWhatsapp size={40} color='green' /></div>
                  </div>
                </div>
              </div>

            </div>

            {/* additional details  */}
            <div className="bg-hovercardBackground w-full flex flex-col gap-8 justify-center p-10">
              <div className='text-sm text-grey'>
                <h2 className='text-xl font-semibold '>Top Stories: Brand Directory</h2>
                <br />
                <p><b>MOST SEARCHED FOR ON FLIPKART:</b> IPhone 16 | iPhone 16 Plus | iPhone 16 Pro | iPhone 16 Pro Max | Whoop Band | Flipkart Minutes | Flipkart Exchange | Flipkart Reset | Nothing Phone 2a Plus | Sarees | CMF by Nothing Phone 1 | Pocket Bazaar | Xiaomi 14 CIVI | infinix Note 40 Pro 50 | Phone 15 Infinix Note 40 50 | iPhone 15 Plus vivo X Fold3 Pro | Motorola go4s | Vivo x 100 | OnePlus Nord CE 3 Lite SG | Spoyl Store | SAMSUNG FlipS | SAMSUNG FoldS | Flipkart Axis Bank Super Elite Credit card | 5G Mobile Phones Primebook Laptops | Moto Edge 40 | Grievance Redressal | OPPO Reno7 Pro SG | Help Centre | Track Orders | Manage Orders | Return Orders | Gift Cards Store | Flipkart Axis Bank Credit Card | Pay Later<br /><br /> <b>MOBILES:</b> OPPO Reno 12 Redmi 12 50 | Realme 12+5G | POCO C65 | Motorola G84 | Realme C53 | Infinix Smart 8 | Samsung Galaxy 523 50 | Samsung Galaxy S21 FE 5G Qualcomm | vivo V30 | Samsung Galaxy 524 5G | Samsung Galaxy S24+5G | Phone 12 64GB Phone 12 Pro 512GB | iPhone 12 128GB | Vivo Y1S | SAMSUNG Galaxy S21 FE 5G | Infinix HOT 301 | Realme 10 Pro 5G | MOTOROLA G62 5G | Nothing Phone | REDMI Note 12 Pro 5G | Infinix SMART 7 | Vivo Y12 | Oppo A12 | Motorola 5g Phone | Realme 5g Smartphone Apple 5g Phone | Iqoo 5g Phones | Oneplus 5g Phones | Vivo 5g Phones | Oppo 5g Smart Phones | Oppo F15 | Oppo A31 | Samsung A71 | Samsung AS1 | Samsung A31 | 4G Mobile | Nokia Mobile | Samsung Mobile | iphone | Oppo Mobile | Viva Mobile<br /><br />  <b>CAMERA:</b> GoPro Action Camera | Nikon Camera | Canon Camera | Sony Camera | Canon DSLR Nikon DSLR<br /><br /> <b>LAPTOPS:</b> Asus ROG Ally MacBook Pro M2 | Premium Laptop ASUS ROG Strix SCAR 16 (2023) Core i9 13th Gen | ASUS ROG Zephyrus M16 (2023) Core i9 13th Gen | ASUS Zenbook 14 OLED (2022) | Realme Book Prime Core i5 11th Gen | Microsoft Surface Go Pentium 128GB Apple Laptops | Acer Laptops | Lenovo Laptops | Dell Laptops | Asus Laptops | HP Laptops | Gaming Laptops | 2 in 1 Laptops Laptops Dell latest laptops 2022 | HP latest laptops 2022 | Infinix INBook YS Plus | SAMSUNG Galary Book3 12th Gen Intel Core Laptops TVS Nokia TV | Panasonic TV | Thomson TV MIX Pro | Realme TV Motorola TV | OnePlus TVs | LG TV TV Sony TV | Samsung TV Android Television | Iffalcon Tv | Mi TV<br /><br /> <b>LARGE APPLIANCES:</b> Television
                  Washing Machines | Refrigerators | Air Conditioners | Electric Cookers | Electric Jug(Heater)/Travel Kettles | Induction Cooktops | Inverters/stabilizer Irons/Iron Box | Mixer Grinder Juicer | Wet Grinders | Chimneys | Microwave Ovens! Vacuum Cleaners | Water Purifier | Fan <br /><br />  <b>CLOTHING:</b> Sarees | Green bridal lehenga | Tops | Apron for Doctors Shoes Sunglasses | Bridal Blouse | Half saree blouse designs | Designer blouses | Blouse designs | Shirts / Cotton saree blouse designs Tshirts | Jeans | Dresses | One pieces | Grsom designs | Stylish blouse astin design | Track Pant | Blouse neck designs | Kurtas | Party Dresses | Palazzo Suits | Anarkall Gowns Cut out dress | Salwe
                  wedding sherwani | Designer Salwar Suits | Bra | Cotton simple blouse designs | Banarasi saree blouse Suits Kurtis | Designer Sarees | Leggings | Shorts | Georgette Sarees | Ethnic Wear uppada pattu sarees | Blouse back design | Jodhpur pants<br /><br />
                  <b>FOOTWEAR:</b> Adidas Shoes | Restick Shoes Nike Shoes | Puma Shoes | Boots Bata Shoes | Woodland Shoes | Skechers Shoes | Sneakers Womens Boots | Sports Shoes | Loafers | Sanitals | Lotto Sports Shoes | Casual Shoes | Womens Skechers Shoes Asics Sports Shoes Formal Shues School Shoes | Cheese Patanjal Atta Fortune Aashirvaad Alta Tes<br /> <br /><b>GROCERIES:</b> PhonePe Grocery Voucher | Hand Wash | Soap | Cashew Nuts | Sunflower Oil Eggs | Toilet Cleaner | Harpic Toilet Cleaner | Dettol Soap | Mustard Oil Biscuits<br /><br /> <b>BEST SELLING ON FLIPKART:</b>  Headphones | Best Gas Geyser | Kitchen Geyser | Nutri Blenders Portabile Air Cocier Best Air Cooler Bags | Hitachi Refrigerator 3 Door | Rooks | Toys | Candles | Helmets Wall Clocks Baby Food Chocolates Cycies | Calculators | Lipsticks | Mask | Vertiv UPS | Fastrack Watches | Wallets Earrings Gold Coins Reaime Pad Mini Handbags conext SW2 Smartwatch | Mivi DuoPods 350 | Speaker Cleaner<br /><br /> <b>FURNITURE:</b> Furniture | Sofas | Beds | Diring sets | Wardrobes Mattresses | TV Units | Tables | Chairs | Shelves | Bean Bags Office Chairs Computer Table | Office Tables | Red Sofa | Wakefit Beds | White Sofa | Wasefit Mattress | Green Dota/thack Sofa Brown Sofa<br /><br /> <b>BGMH:</b> Shampoo Whey Protein | Homeopathy | Cricket Cycies | Footbals | Treadmills | Christmas Gifts Fitness Accessories Oreine Quitar | Books Store | Musical Instrument Store | Dabur Chyawanprash | Baidyanath Chyawanprash | Energy Orves Toys Milk Drink Mikes) Chyawanprash | Indian Flag Protein Supplements</p>
              </div>

            </div>

          </div>
          </>
          
        )
      }


    </div>
  )
}

export default First