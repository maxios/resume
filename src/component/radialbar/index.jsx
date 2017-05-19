import React from 'react';
import './index.scss';

class RadialBar extends React.Component{
    constructor(){
        super()
        
       

        this.state = {
            // max progress is (100)
            //        v
            //        v
            progress: 75, // <<<< progress
            //        ^
            //        ^
            //      progress

            right: function(progress){
               console.log(1+1);
            }
        }
    }
    
   
    update(e){
         var left = document.getElementsByClassName('left')[0];
        var right = document.getElementsByClassName('right')[0];
       let percent = this.state.progress;
       console.log('percent is ' + percent);

       if(percent < 50){
           var rightDegree = (percent/50) * 180;
           right.style.transform = 'rotateZ(' + rightDegree + 'deg)'
       }else{
            var leftDegree = ((percent-50)/50) * 180;
            console.log( ((percent-50)/50)*180 );
            right.style.transform = "rotateZ(180deg)"
            console.log(right.style);
            left.style.transform = 'rotateZ(' + leftDegree +'deg)'
            left.style.opacity = '1';
       }
    }
    render(){
        return(
            <div className='container'>
                <div className='core background'></div>
                <div className='half left'></div>  
                <div className='half right'></div>
                <div className='half mediate'></div>
                
                <button onClick={this.update.bind(this)}>click me</button>
                <div className='core'></div>
                
            </div> 
        )
    }
}

export default RadialBar;