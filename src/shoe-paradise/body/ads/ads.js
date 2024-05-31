import "./ads.css"

import { Link } from "react-router-dom";
import "../../Admin panel/All products/allproducts.css"

export function Ads({ array }) {

    let data1 = [
        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2022/december/fran-road-running-130123.jpg?impolicy=thumb&imwidth=1440",
            title: "Road Running Shoes",
            content: "Rule the roads with the best foot wear in the game."
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2022/december/fran-track-running-130123.jpg?impolicy=thumb&imwidth=1440",
            title: "Trackle and Field Spikes",
            content: "Sprint to victory in the latest track and feild spikes."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2022/december/fran-trail-130123.jpg?impolicy=thumb&imwidth=1440",
            title: "Trail Running Shoes",
            content: "Take the path less trodden and hit the spikes."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2022/december/fran-xc-spikes-130123.jpg?impolicy=thumb&imwidth=1440",
            title: "Cross Country  Shoes",
            content: "The Latest and Greatest field event footwear."
        }

    ];



    let data2 = [
        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/feature-tabs/clothing/nike/nike-ek-umoja-collection/ft-ek-ujoma-collection-250823.jpg?impolicy=thumb&imwidth=1440",
            title: "Designed To Inspire",
            content: "  Celebrate 20 years of Eliud Kipchoge’s greatest moments with the Nike EK Umoja Collection!"
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/feature-tabs/shoes/adidas/ft-mixed-adizero-story-d-140923.jpg?impolicy=thumb&imwidth=1440",
            title: "Feel The Speed ",
            content: "  Tackle any distance at top speeds with the adidas adizero collection"
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/feature-tabs/shoes/nike/ftab-nike-fast-pack-210923.jpg?impolicy=thumb&imwidth=1440",
            title: "Find the Fast",
            content: " Tackle every part of your training plan with the Nike Fast Pack."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/feature-tabs/clothing/on/ftab-on-mens-clothing-190923.jpg?impolicy=thumb&imwidth=1440",
            title: "  Fashion and Functionality",
            content: "High performance meets high aesthetics in Men’s On running clothing, whatever the run or conditions."
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/feature-tabs/shoes/saucony/kinvara/ftab-saucony-kinvara-190923.jpg?impolicy=thumb&imwidth=1440",
            title: "Go TO Distance",
            content: "Find The New Speed With Saucony Kinvara 14 and Kinvara Pro!"
        }

    ];




    let data3 = [
        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2023/january/tab-raceday-d-270123.jpg?impolicy=thumb&imwidth=1440",
            title: "Race Day",
            content: " You’ve put in the hard graft, now it’s time to lace up and wave your old PBs goodbye with a shoe built for racing."
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2023/january/tab-everday-mileage-d-270123.jpg?impolicy=thumb&imwidth=1440",
            title: "Every Day Mileage",
            content: "These are the perfect shoes for any runner looking to go out and get some miles under their belt, beginner and advanced alike."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2023/january/tab-tempo-run-d-270123.jpg?impolicy=thumb&imwidth=1440",
            title: "Tempo Runs",
            content: "Tempo running could simply be described as running at a comfortably hard pace, for a prolonged period of time."

        }

    ];



    let data4 = [

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/article-tabs/tab-adidas-marathon-shoes-210623.jpg?impolicy=thumb&imwidth=1440",
            title: "The Best adidas Shoes For a Marathon",
            content: " In this article, we will explore the impressive line-up of adidas shoes, from the lightweight, speed orientated race shoes, to more comfortable options that you can train in too."
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/article-tabs/tab-top-summer-accessories-210623.jpg?impolicy=thumb&imwidth=1440",
            title: "Top Summer Accessories",
            content: " Take a look at our top picks of Summer accessories now and find the perfect items to compliment your run this season."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/article-tabs/tab-best-of-daily-mileage-150523.jpg?impolicy=thumb&imwidth=1440",
            title: "The Best Running Shoes For Daily Mileage",
            content: " A do it all daily trainer. We all need one (or several) in our running shoe repertoire! Read more to discover our top picks."

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs/article-tabs/tab-adidas-clothing-tech-explained-210623.jpg?impolicy=thumb&imwidth=1440",
            title: " Adidas Clothing Tech Explained",
            content: " Join us as we explore the remarkable innovations that have solidified adidas' position as a frontrunner in the field of athletic apparel and help explain what each technology can do for you!"

        }

    ];



    let data5 = [

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2023/january/tab-partners-parkrun-270123.jpg?impolicy=thumb&imwidth=1440",
            title: "pakrun",
        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/home/2022/october/tab-tmr-partner-031022.png?impolicy=thumb&imwidth=1440",
            title: "The Mum Runs",

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/partners/partner-tab-vrwc.jpg?impolicy=thumb&imwidth=1440",
            title: "Running World Cup",

        },

        {
            src: "https://www.prodirectsport.com/-/media/prodirect/project/en/running/tabs-old/partners/partner-tab-4-do.jpg?impolicy=thumb&imwidth=1440",
            title: "do Sport",
        }

    ];




    return <>

        <div id="allbodyads">

            <div id="Runads">
                <div id="adsheadingbox">
                    <h1 id="adsh1">How are you looking to run</h1>
                </div>

                <div id="adsrun">
                    {
                        data1.map(function (values1) {
                            return (
                                <div id="card">
                                    <div id="picbox">
                                        <img id="adspictures" src={values1.src} />
                                    </div>
                                    <div id="descbox">
                                        <div id="detail">
                                            <h5 id="title">{values1.title}</h5>
                                            <h6 id="content">{values1.content}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div id="Genderpic">

                <div className="box">
                    <img className="male" src="https://www.prodirectsport.com/-/media/prodirect/project/en/running/billboards/clothing/split/mixed/sbb-mens-running-3-m-040723.jpg?impolicy=thumb&imwidth=599" />

                    <div id="malecontent"><h1 id="heading">Men's Running</h1>
                        <p id="paragph">Unlock Your Best</p></div>
                </div>


                <div className="box">
                    <img className="fe male" src="https://www.prodirectsport.com/-/media/prodirect/project/en/running/billboards/clothing/split/mixed/sbb-womens-running-3-m-040723.jpg?impolicy=thumb&imwidth=599" />

                    <div id="malecontent"><h1 id="heading">Women's Running</h1>
                        <p id="paragph">Unlock Your Best</p></div>
                </div>

            </div>


            <div id="featuredads">

                <div id="featurednav">
                    <h1 id="h1feature">Featured</h1>
                </div>

                <div id="featured">
                    {
                        data2.map((values2) => {
                            return <div id="Featuredcard">

                                <div id="featuredimgbox"><img id="Featuredpic" src={values2.src} /></div>

                                <div id="featureddescbox">
                                    <h3 id="featuredheading">{values2.title}</h3>
                                    <p id="featuredpara">{values2.content}</p>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>





            <div id="perfectshoes">

                <div id="perfectshoebox">
                    <h1 id="shoeheading">Find Your Perfect Shoe</h1>
                    <p id="shoepara">How are you Looking To run?</p>
                </div>


                <div id="perfectshoeads">
                    {
                        data3.map((values3) => {
                            return <div id="perfectcards">
                                <div id="perfectimgbox"><img src={values3.src} id="perfectimg" />
                                    <div id="perfectshoedesc">
                                        <h1 id="perfectshoeh1">{values3.title}</h1>
                                        <p id="perfectshoepara">{values3.content}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>





            <div id="hubBreak">

                <div id="hub">
                    <div id="hubimgbox"><img id="hubimg" src="https://www.prodirectsport.com/-/media/prodirect/project/en/running/other/logo/extra-mile-03.png?h=212&w=714&la=en&hash=99C0A1AC034A4D2381862DEB766A8A81" /></div>
                    <p id="hubpara">Our Specialist Running Advice and Product Breakdown Hub</p>
                </div>

                <div id="Breakdown">
                    {
                        data4.map((values4) => {
                            return <div id="Breakdowncard">

                                <div id="Breakdownimgbox"><img id="Breakdownpic" src={values4.src} /></div>

                                <div id="Breakdowndescbox">
                                    <h3 id="Breakdownheading">{values4.title}</h3>
                                    <p id="Breakdownpara">{values4.content}</p>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>




            <div id="partnav"><h1 id="partnernavh1">Our Partners</h1></div>
            <div id="Partner">
                {
                    data5.map((values5) => {
                        return <div id="Partnercard">

                            <div id="Partnerimgbox"><img id="Partnerpic" src={values5.src} /></div>

                            <div id="Partnerdescbox">
                                <h3 id="Partnerheading">{values5.title}</h3>
                            </div>
                        </div>

                    })
                }
            </div>

            <div id="carddisplaycontaoner" >

                {
                    array.map(function (obj) {
                        return <div className="productcarddisplay" style={{ width: "18rem" }}>
                            <img id="displaycardsimgs"
                                src={obj.imgsrc}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <h6 className="card-subtitle mb-2 text-muted">{obj.producttitle}</h6>
                                <p className="card-text">
                                    {obj.productDesc}<span className="articleprize">: {obj.Price}</span>
                                </p>
                                <Link to={"/order/" + obj.id} className="btn mr-2">
                                    <i className="fas fa-link" /> Order here
                                </Link>
                                <a href="#" className="btn ">
                                    <i className="fab fa-github" />
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>



    </>
}




