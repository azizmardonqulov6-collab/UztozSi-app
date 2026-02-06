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

export default function Catigory() {
  return (
    <div className="pt-[30px] px-2 flex flex-col gap-12 ">
      <div className="catigory w-full flex justify-between ">
         <span className="text-[20px] font-bold ">Toifa</span>
         <span>
            <select name="darslar" id="darslar" className="py-1 px-2 text-l border-3 border-[#14213D] rounded-full">
              <option value="">Barchasi</option>
              {darslar.map(pro => {
                return <option value="Barchasi">{pro.name}</option>
              })}
            </select>
         </span>
      </div>
      <div className="catigory-list flex gap-[20px] w-full overflow-x-scroll">
            {
             darslar.map(pro =>{
                return <div className="flex flex-col gap-2 text-center">
                            <span className="w-[124px] h-[118px] border-1 border-[#000] rounded-[16px] overflow-hidden">
                                <img className="w-full h-full object-cover rounded-[16px]" src={pro.image} alt={pro.image} />
                            </span>
                            <h3 className="font-bold">{pro.name}</h3>
                        </div>
             })   
            }
      </div>
    </div>
  )
}
