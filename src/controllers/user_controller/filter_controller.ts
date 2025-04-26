import prisma from "../prisma_client"


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


export async function applyComplexFilters(sideBarFilteredData:any,sectionName:any,currentData:any,status:any){


    try{

        console.log("sectin nameeeeeeeeeeeeeeeeeeeeeeeeeee")
        
        const promises = sideBarFilteredData.map(async (data: any) => {
            if (data.name === 'city') {
              const cityValues = data.options
                .filter((option: any) => option.checked)
                .map((option: any) => option.value);
          
              const allFilteredCity = await prisma.profile.findMany({
                where: {
                  cityId: { in: cityValues }, // use 'in' for multiple cityIds
                },
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
                },
              });
          
              return allFilteredSpecialization;
            }
          
            if (data.label === 'agent' || data.label === 'agencies') {
              const allEntities = await prisma.user.findMany({
                where: {
                  role: data.value, // assuming you have role inside `data.value`
                },
              });
          
              return allEntities;
            }
          
            return []; // default if none matched
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