import { observable,  action,  decorate, computed } from 'mobx';
import { Observable } from 'rxjs';

class Store {
 name = '';
  users=[]; 
  score=0;
  

//   handleClick() { 
//       const url =`http://api.giphy.com/v1/gifs/search?api_key=uZFCYanydwNXlybU0Yh7Mf6nQNjQeYPO&q=${this.inputValue}&limit=12`; 
//        fetch(url)
//        .then(response => response.json()) 
//       .then(data => { this.gifs = data.data }) .catch(error => console.error(error)) 
  
setName(value) {
 this.name = value; }

addValue(value) {
  this.score=this.score+=value;
}
 analyse(){
  for (let i=0;i<=2;i++) {
    if(this.rightAnswers[i]===this.values[i]){
     this.score+=1;
    }
  }
}
sendToServer(){
     let url='';
     fetch(url, {
      method: 'post',
      body: JSON.stringify({
        name:this.name,
        score:this.score
      })
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
 console.log(data)
    });
}
}

const store = decorate(Store,
     { name: observable,
         users: observable, 
         addValue:action,
         analyse:action,
         values:observable,
         sendToServer:action,
         rightAnswers:observable,
        //  handleClick: action, 
         setName:action})
         

export default new store();