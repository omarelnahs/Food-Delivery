import { assets } from "../../assets/assets"

const AppDownload = () => {
  return (
    <section className="app-download py-10 my-5" id='app-download'>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="font-bold md:text-4xl text-xl text-center mb-8">For Better Expericencec Download <br /> Tomato App</p>
        <div className="app-download-platforms flex gap-4">
            <img src={assets.play_store} width={150} className="w-46 cursor-pointer" alt="" />
            <img src={assets.app_store} width={150} className="w-46 cursor-pointer" alt="" />
        </div>
      </div>
    </section>
  )
}

export default AppDownload