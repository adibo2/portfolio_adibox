import { About } from "@/components/About";
import Skills from "@/components/Skills";
import { Transition } from "@/components/Transition/Transition";


export default function AboutPage() {
    return (
        <div className=" flex flex-col  mt-4 justify-center md:mt-10 min-h-[108vh]">
            <Transition />
            <Skills />
        </div>
    )
}
