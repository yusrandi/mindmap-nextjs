import { BABI, BABII, BABIII, BABIV, BABV, BABVI } from "@/constants/BabConstant";
import { BabType } from "@/types/MateriType";

export const gamesTitleData: BabType[] = 
    [
         {id: 1, bab: "BAB I",title:"KPK & FPB", src: "/images/bab1.png", subbabs: [
          {
              id: 1,
              title: BABI.SBI,
             
          },
          {
              id: 2,
              title: BABI.SBII,
             
          },
      ]},
         {id: 2, bab: "BAB II",title:"OPERASI HITUNG PECAHAN", src: "/images/bab2.png", subbabs: [
          {
              id: 1,
              title: BABII.SBI,
              
          },
          {
              id: 2,
              title: BABII.SBII,                
              
          },
          {
              id: 3,
              title: BABII.SBIII,
             
          },
          
      ]},
         {id: 3, bab: "BAB III",title:"PENGUKURAN SUDUT", src: "/images/bab3.png", subbabs: [
          {
              id: 1,
              title: BABIII.SBI,
              
          },
          {
              id: 2,
              title: BABIII.SBII,
              
          },
          {
              id: 3,
              title: BABIII.SBIII,
              
          },
          {
              id: 4,
              title: BABIII.SBIV,
              
          },
          
      ]},
         {id: 4, bab: "BAB IV",title:"BANGUN DATAR", src: "/images/bab4.png", subbabs: [
          {
              id: 1,
              title: BABIV.SBI,
             
          },
          {
              id: 2,
              title: BABIV.SBII,
             
          },
          {
              id: 3,
              title: BABIV.SBIII,
             
          },
          
      ]},
         {id: 5, bab: "BAB V",title:"BANGUN RUANG", src: "/images/bab5.png", subbabs: [
          {
              id: 1,
              title: BABV.SBI,
             
          },
          {
              id: 2,
              title: BABV.SBII,
             
          },
          {
              id: 3,
              title: BABV.SBIII,
             
          },
      ]},
         {id: 6, bab: "BAB VI",title:"PENGOLAHAN DATA", src: "/images/bab6.png", subbabs: [
          {
              id: 1,
              title: BABVI.SBI,
             
          },
          {
              id: 2,
              title: BABVI.SBII,
             
          },
          {
              id: 3,
              title: BABVI.SBIII,
             
          },
      ]},
    ]
