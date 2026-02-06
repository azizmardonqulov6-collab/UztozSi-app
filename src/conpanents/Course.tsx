import Button from "./Button"
import { Link } from "react-router-dom"
const darslar = [
    {
        id: 1,
        name: "Ingliz Tili",
        Level: "Boshlangich",
        descrebtion: "Boshlang'ich darajadagilar uchun maxsus ingliz tili darslari. Ovozli yordam bilan oson o'rganing.",
        isPremium: false,
        image: "images/course/english.png"
    },
    {
        id: 2,
        name: "Rus tili",
        Level: "Boshlangich",
        descrebtion: "Boshlang'ich darajadagilar uchun maxsus ingliz tili darslari. Ovozli yordam bilan oson o'rganing.",
        isPremium: false,
        image: "images/course/english.png"
    },
    {
        id: 3,
        name: "Ona Tili",
        Level: "Boshlangich",
        descrebtion: "Boshlang'ich darajadagilar uchun maxsus ingliz tili darslari. Ovozli yordam bilan oson o'rganing.",
        isPremium: false,
        image: "images/course/english.png"
    },
    {
        id: 4,
        name: "Matimatika",
        Level: "Boshlangich",
        descrebtion: "Boshlang'ich darajadagilar uchun maxsus ingliz tili darslari. Ovozli yordam bilan oson o'rganing.",
        isPremium: false,
        image: "images/course/english.png"
    }
]

export default function Course({type} : any) {
    return (
        <div className="course w-full flex flex-col gap-8 pt-[80px]  ">
            <div className="fist-content w-full flex justify-between items-center">
                <h2 className="font-semibold text-xl">Darslar</h2>
                {
                  type === "button" ? <Link to="/edu" className="py-1 px-5 font-medium text-l border-3 border-[#14213D] rounded-full">Barchasi</Link> :             <select name="darslar" id="darslar" className="py-1 px-2 text-l border-2 border-[#14213D] rounded-full">
                    <option value="">Barchasi</option>
                    {darslar.map(pro => {
                        return <option value="Barchasi">{pro.name}</option>
                    })}
                    </select>
                    
                }
            </div>
            <div className="product flex  gap-8 flex-wrap justify-center">
                {
                    darslar.map(pro => {
                        return <div className="flex flex-col gap-5 w-full h-fit border-3 border-[#14213D] rounded-3xl pb-4 px-3 lg:w-1/4">
                            <img src={pro.image} alt={pro.image} />
                            <div className="two-content w-full flex justify-between ">
                                <h2 className="text-2xl font-semibold">{pro.name}</h2>
                                <select name="darslar" id="darslar" className="py-1 px-2 text-l border-3 border-[#14213D] rounded-full">
                                    <option value="Barchasi">{pro.Level}</option>
                                </select>
                            </div>
                            <h3>{pro.descrebtion}</h3>
                            <Button name="Kirish" type="full" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
