export default function Button({name , type , width , hight } : any) {
  return (
    <button className={`${type === "static" ? "p-[15px] bg-[#14213D] text-white rounded-[30px] " : type === "full" ? "w-full p-[15px] bg-[#14213D] text-white  rounded-[30px]" : type === "line-out" ? "border-3 border-[#14213D] text-[#14213D] rounded-[30px]" : "p-[15px] bg-[#14213D] text-white rounded-[30px]"}  ${width ? `w-[${width}]` : "w-fit"} ${hight ? `w-[${hight}]` : "w-fit"}`} >{name}</button>
  )
}
