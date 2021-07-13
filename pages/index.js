import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'
import QRCode from 'qrcode'



const Home = () => {

    const [inputurl, setInputUrl] = useState("");
    const [imageurl, setImageUrl] = useState("");



        var opts = {
            errorCorrectionLevel: 'H',
            type: `image/jpeg`,
            quality: 0.92,
            margin: 1,
            width:350,
            color: {
                dark:"#000000",
                light:"#ffffff"
            }
        }




        const onSubmitHandler = () => {
            QRCode.toDataURL(inputurl, opts, function (err, url) {
                if (err) {
                    console.log(err)
                }
                setImageUrl(url);
            })
        }


    return (
       <>
       <Head>
            <meta charSet="UTF-8"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="HVBQ6o-im9lHaO68NXRKpmHCR0Gqujr-a3pIG5l86Qc" />
            <meta
              name="description"
              content="Free online QR code generater. Convert your URLs to QR codes. Download into Jpeg images. Generate unlimited QR codes. No signups and login required. Generate with one click."
            />
            <title>QR code Generator| Make QR code for Free</title>
       </Head>
        <div>
            <h1 className="text-center mt-10 mb-10 font-bold text-5xl">QR CODE GENERATOR</h1>
            <div className="max-w-xl mx-5 sm:mx-auto">
                <input className="w-full block border border-black py-1 px-3 text-grey-darkest focus:outline-none focus:ring-1 focus:ring-black rounded shadow-xl " type="text"  id="url" autoComplete="off" placeholder="Enter URL" onChange={e => {setInputUrl(e.target.value)}} value={inputurl} />
            </div>
            <div className="mx-auto">
                <button className="block mx-auto border-2 text-lg bg-red-500 text-white rounded-md p-3 mt-3 font-bold hover:bg-white hover:text-red-500 hover:border-red-500" onClick={onSubmitHandler}>Generate QR Code</button>
            </div>
            <div className="hidden sm:flex flex-col justify-center sm:flex-row items-center rounded mx-auto max-w-3xl py-3 mt-5 bg-gray-100">
                <div className="w-1/2">
                    {imageurl && <div className="flex flex-row justify-center">
                        <a href={imageurl} download="qrcode" className="bg-red-500 text-white border-2  mx-auto p-3 rounded-md font-bold text-xl hover:bg-white hover:text-red-500 hover:border-red-500">Download QR code</a>
                    </div>}

                    {!imageurl && <div className="flex flex-row justify-center">
                        <div className="bg-red-500 text-white border-2 opacity-25 mx-auto p-3 rounded-md font-bold text-xl cursor-not-allowed">Download QR code</div>
                    </div>}
                </div>

                {!imageurl && <div className="w-1/2 "> 
                    <Image  src="/qrcode-initial.jpg" width={350} height={350}  alt="QR code" className="" />
                </div>}

                {imageurl && <div className="w-1/2 "> 
                    <Image  src={imageurl} alt="QR code" width={350} height={350}  className="" />
                </div>}
              
            </div>


            <div className="sm:hidden bg-gray-100 flex flex-col items-center mt-3 ">
                {!imageurl && <div className="mt-3 mx-3"> 
                    <Image  src="/qrcode-initial.jpg" width={350} height={350}  alt="QR code" className="" />
                </div>}

                {imageurl && <div className="mt-3 mx-3"> 
                    <Image  src={imageurl} alt="QR code" width={350} height={350}  className="" />
                </div>}

                <div className="mt-3 mb-3">
                    {imageurl && <div className="flex flex-row justify-center">
                        <a href={imageurl} download="qrcode" className="bg-red-500 text-white border-2  mx-auto p-3 rounded-md font-bold text-xl hover:bg-white hover:text-red-500 hover:border-red-500">Download QR code</a>
                    </div>}

                    {!imageurl && <div className="flex flex-row justify-center">
                        <div className="bg-red-500 text-white border-2 opacity-25 mx-auto p-3 rounded-md font-bold text-xl cursor-not-allowed">Download QR code</div>
                    </div>}
                </div>
            </div>


    

            <footer className="mt-5 mb-3 text-center font-medium text-gray-400">
                Designed by <a className="text-blue-300" href="https://twitter.com/TatheAtharv">Atharv Tathe</a>
            </footer>


        </div>
        </>
    )
}

export default Home