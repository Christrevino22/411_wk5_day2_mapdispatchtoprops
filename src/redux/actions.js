export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};
//WASN'T EXPORTING THE DAMN FUNCTION SO THATS WHY IT WASN'T WORKING!!!!!!! WTF!!!!!
// GETTING A PRETTY GOOD UNDERSTANDING

//NOW I NEED TO CREATE A REMOVE CAR FUNCTION
// basically do the same as the add car function
//THE PRE WORK HAS A MAJORITY OF THE OF THE ANSWERS FOR THE HM

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};
