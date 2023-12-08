import { About } from "@/components/About";
import Skills from "@/components/Skills";
import { Transition } from "@/components/Transition/Transition";


export default function AboutPage() {
    return (
        <div className=" flex flex-col  mt-32 justify-center md:mt-10 min-h-[112vh] md:min-h-[92vh]">
            <Transition />
            <Skills />
        </div>
    )
}
