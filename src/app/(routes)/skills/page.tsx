import { About } from "@/components/About";
import Skills from "@/components/Skills";
import { Transition } from "@/components/Transition/Transition";


export default function AboutPage() {
    return (
        <div className=" flex flex-col  justify-center mt-10 min-h-screen">
            <Transition />
            <Skills />
        </div>
    )
}
