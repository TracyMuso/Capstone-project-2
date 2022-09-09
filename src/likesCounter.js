const counter = (dataset)=>{
  const disp = document.querySelectorAll(".likes");
  disp.forEach((e,index)=>{
      if(dataset.target.dataset.id == e.dataset.id){
        e.innerHTML++
      }
  })
}

export default counter