import React from "react";
import ModelCreations from "./ModelCreations";
import {RViewer, RViewerTrigger} from 'react-viewerjs'



const Creations = () => {

    const imagesMobile = [ 
    {
        urlMobile:'../../public/assets/images/mobile/image-deep-earth.jpg',
        id:'1',
        title:'deep earth'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-night-arcade.jpg',
        id:'2',
        title:'night arcade'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-soccer-team.jpg',
        id:'3',
        title:'Soccer team vr'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-grid.jpg',
        id:'4',
        title:'the grid'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-from-above.jpg',
        id:'5',
        title:'from up above vr'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-pocket-borealis.jpg',
        id:'6',
        title:'pocket borealis'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-curiosity.jpg',
        id:'7',
        title:'the curiosity'
    },
    {
        urlMobile:'../../public/assets/images/mobile/image-fisheye.jpg',
        id:'8',
        title:'make it fisheye'
    }
    ];


    const imagesDesktop = [
        {
          urlDesktop:'../../public/assets/images/desktop/image-deep-earth.jpg',
          id:'9',
          title:'Deep earth'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-night-arcade.jpg',
            id:'10',
            title:'night arcade'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-soccer-team.jpg',
           id:'11',
           title:'Soccer team vr'
           
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-grid.jpg',
            id:'12',
            title:'the grid'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-from-above.jpg',
            id:'13',
            title:'from up above vr'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-pocket-borealis.jpg',
            id:'14',
            title:'pocket borealis'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-curiosity.jpg',
            id:'15',
            title:'the curiosity'
        },
        {
            urlDesktop:'../../public/assets/images/desktop/image-fisheye.jpg',
            id:'16',
            title:'make it fisheye'
        }
     ]
     let options={
        toolbar: {
          prev: true,
          next: true
        }
      }

  return (
    <article className="mb-36">
      <div className="flex flex-col justify-center items-center">
        <div className=" w-full flex items-center justify-between flex-col lg:flex-row lg:px-[15%]">
          <h2 className="uppercase text-5xl text-center font-thin">
            Our creations
          </h2>
          <button className="border hidden lg:block border-black py-2 px-10 tracking-wider text-2xl hover:bg-black hover:text-white ">
            See All
          </button>
        </div>
        <div className="flex flex-col items-center ">
        <RViewer options={options} imageUrls={imagesMobile}>
            <div className="flex flex-wrap gap-10 p-5">
                {imagesMobile.map((image)=>{
                    return(
                        <div className="relative hover:opacity-40 cursor-pointer" key={image.id}>
                            <img src={image.urlMobile} alt="image creations" className="lg:hidden" />
                            <p className="absolute top-[4rem] tracking-wider left-10 w-[9.3rem] text-3xl font-thin uppercase text-white">{image.title}</p>
                        </div>
                    )
                })}
            </div>
        </RViewer>
        <RViewer options={options} imageUrls={imagesDesktop}>
            <div className="flex flex-wrap gap-10 p-5">
                {imagesDesktop.map((imageDesktop)=>{
                    return(
                        <div className="relative hover:opacity-40 cursor-pointer" key={imageDesktop.id}>      
                            <img  src={imageDesktop.urlDesktop} alt="image creations" className="hidden lg:block" />
                            <p className="absolute top-[21rem] tracking-wider left-8 w-[9.3rem] text-3xl font-thin uppercase hidden lg:block text-white">{imageDesktop.title}</p>
                        </div>
                    )
                })}
            </div>
        </RViewer>
          <button className="border self-center lg:hidden border-black py-2 px-[4rem] uppercase tracking-wider text-2xl hover:bg-black hover:text-white ">see all</button>
        </div>
      </div>
    </article>
  );
};


export default Creations;
