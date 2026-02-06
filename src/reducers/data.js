import { createSlice } from "@reduxjs/toolkit";

export const Data = createSlice({
    name: "data",
    initialState: [
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
    ],
    reducers: {
        
    }
})