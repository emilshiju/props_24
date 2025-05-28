import prisma from "../prisma_client"



export async function getAllAgent(){

  try{

    const resAllAgent=await prisma.user.findMany({
      where: {
        role:'agent', // assuming you have role inside `data.value`
      },
      select: {
        profile: {
          include: {
            city: true,
            specialization: true,
          },
        },
      }
    });

    return resAllAgent
      .map((user) => user.profile)
      .filter((profile) => profile !== null);


  }catch(error){
    console.log("error ocured in getAllAgent",error)
  }

}


export async function getAllAgencies() {

  try{


    const resAllAgencies=await prisma.user.findMany({
      where: {
        role:'agencies', 
      },
      select: {
        profile: {
          include: {
            city: true,
            specialization: true,
          },
        },
      }
    });

    console.log("got all agenciess")
    console.log(resAllAgencies)

    return resAllAgencies.map((user) => user.profile);




  }catch(error){
    console.log("error occured in getAllAgencies",error)
  }
  
}

export async function getFilter(){

    try{

        const allCity=await prisma.city.findMany({})
        const allSpecialization=await prisma.specialization.findMany({})

        const cityOptions = allCity.map(city => ({
            value: city.id,
            label: city.cityName,
            checked: false,
          }));
          
          const specializationOptions = allSpecialization.map(spec => ({
            value: spec.id,
            label: spec.title,
            checked: false,
          }));
          
      

       

        const sideBarFilter=[
          
            {
                id:'city',
                name:"city",
                options:cityOptions
            },
            {
                id:'specialization',
                name:"specialization",
                options:specializationOptions
            }
        ]

        return sideBarFilter


    }catch(error){
        console.log("error occred in getFilter",error)
        return false
    }


}


export async function applyComplexFilters(sideBarFilteredData:any,sectionName:any,currentData:any,status:any,item:any){


    try{

        console.log("sectin nameeeeeeeeeeeeeeeeeeeeeeeeeee")
        console.log(sideBarFilteredData)
        
        const promises = sideBarFilteredData.map(async (data: any) => {
            if (data.name === 'city') {
              const cityValues = data.options
                .filter((option: any) => option.checked)
                .map((option: any) => option.value);
          
              const allFilteredCity = await prisma.profile.findMany({
                where: {
                  cityId: {
                    in: cityValues
                  },
                  user: {
                    role: item
                  }
                },  
                include: {
                  city: {
                    select: {
                      cityName: true,
                    }
                  },
                  specialization: {
                    select: {
                      title: true
                    }
                  }
                }
                
              });
          
              return allFilteredCity;
            }
          
            if (data.name === 'specialization') {
              const specializationValues = data.options
                .filter((option: any) => option.checked)
                .map((option: any) => option.value);
          
              const allFilteredSpecialization = await prisma.profile.findMany({
                where: {
                  specializationId: { in: specializationValues }, // assuming specializationId
                  user: {
                    role: item
                  }
                },
                include: {
                  city: {
                    select: {
                      cityName: true
                    }
                  },
                  specialization: {
                    select: {
                      title: true
                    }
                  }
                }


              });
          
              return allFilteredSpecialization;
            }
          
          
          
            return []; 
          });
          
          // Wait for all promises to resolve
          const results = await Promise.all(promises);

          const ans = results.flat();

          const uniqueAns = Array.from(
            new Map(ans.map(item => [item.id, item])).values()
          );
          

        

        console.log("filteredddddddddddddddddddddddddddddddddddddddddd one")
        console.log(uniqueAns)


        console.log("got alll in appplyyyyyyyyy filterrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(ans,currentData,status)

        return uniqueAns



    }catch(error){
        console.log("error occur in applyComplexFilters",error)

        return false
    }


}


export async function getAllList(){

    try{

        const list = await prisma.profile.findMany({})

        return list



    }catch(error){
        console.log("error occured in getAllList controler")
        return false
    }
}





export async function searchAll(data:string){

  try{

   const allData:any={ allAgent:[] ,allAgencies:[], allCity:[]}


   const allAgentList=await prisma.profile.findMany({

    where:{
      AND: [
        {
          OR: [
            { businessName: { contains: data, mode: 'insensitive' } },
            { phone: { contains: data, mode: 'insensitive' } },
            { licenseNumber: { contains: data, mode: 'insensitive' } },
            { bio: { contains: data, mode: 'insensitive' } },
          ],
        },
        {
          user: {
            role: 'agent', 
          },
        },
      ],
    }
   })

   allData.allAgent.push(...allAgentList)



   
   const allAgenciesList=await prisma.profile.findMany({

    where:{
      AND: [
        {
          OR: [
            { businessName: { contains: data, mode: 'insensitive' } },
            { phone: { contains: data, mode: 'insensitive' } },
            { licenseNumber: { contains: data, mode: 'insensitive' } },
            { bio: { contains: data, mode: 'insensitive' } },
          ],
        },
        {
          user: {
            role: 'agencies', 
          },
        },
      ],
    }
   })

   allData.allAgencies.push(...allAgenciesList)

   const allCityList = await prisma.city.findMany({
    where: {
      cityName: {
        contains: data,   
        mode: 'insensitive', 
      },
    },include:{
      details:true
    }
  });

  allData.allCity.push(...allCityList)
  

   console.log("got allllllllllllllllllllllllllll")
   console.log(allData)


    return allData


  }catch(error){
    console.log("error occured in searchAll",error)

    return false

  }
}