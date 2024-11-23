import Logo from "@/public/logo.svg"
import Image from "next/image"

const Navbar = () => {
  return (
    <section>
        <div className='bg-black w-full px-7 py-4 flex justify-between items-center'>
            <div className="flex gap-3 text-white items-center">
                <Image
                    src={Logo}
                    alt="Logo"
                    className="w-[35px]"
                />
                <h1 className="font-[700]"> Spotifind </h1>
            </div>

            <div className="text-white">
                <p> Search </p>
            </div>

            <div className="text-white">
                <h1> Nama Kelompok </h1>
            </div>
        </div>
    </section>
  )
}

export default Navbar
